import * as React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { ToastContainer, toast } from 'react-toastify';
import fast from 'fast.js';

import { Loader, EditingModeModal } from 'ui/atoms';
import { ConfigPreviewer } from 'ui/molecules';
import { Sidebar, RuleInfo } from 'ui/organisms';

import { RULES_QUERY } from 'graphql/queries/rule';
import { generateConfig } from 'utils';

import 'react-toastify/dist/ReactToastify.css';


const Wrapper = styled.div`
  display: flex;
`;


export class RulePage extends React.Component {
  state = {
    rules: [],
    filteredRules: [],

    previousRule: null,
    activeRule: null,
    nextRule: null,

    searchingString: '',

    isConfigPreviewerVisible: false,
    isEditingModeEnabled: false,
    isEditingModeModalVisible: false,

    wasEditingModeModalShowed: false,

    didRulesQueryMount: false,
  };

  filterRules = () => {
    this.setState((prevState) => {
      if (prevState.searchingString.length === 0) {
        return {
          ...prevState,
          filteredRules: prevState.rules,
        };
      }

      const rulesMatchedByName = fast.filter(prevState.rules, ((rule) => rule.name.includes(prevState.searchingString)));
      const rulesMatchedByShortDescription = fast.filter(prevState.rules, ((rule) => rule.shortDescription.includes(prevState.searchingString)));

      const filteredRules = [...rulesMatchedByName, ...rulesMatchedByShortDescription];

      const filteredRulesWithoutCopies = fast.filter(filteredRules, ((rule, i, rules) => !rules.includes(rule, i + 1)));

      return {
        ...prevState,
        filteredRules: filteredRulesWithoutCopies,
      };
    });
  };

  changeSearchingString = (value) => {

    if (value === 'TURN ON EDITING MODE' || value === 'TURN OFF EDITING MODE') {
      if (this.state.isEditingModeEnabled !== (value === 'TURN ON EDITING MODE')) {
        this.setState({
          isEditingModeEnabled: value === 'TURN ON EDITING MODE',
          isEditingModeModalVisible: value === 'TURN ON EDITING MODE',
        }, () => toast.success(`Editing mode was successfully ${value === 'TURN ON EDITING MODE' ? 'enabled' : 'disabled'}`));
      }
    } else {
      this.setState({
        searchingString: value,
      }, this.filterRules);
    }
  };

  toggleAllRulesInCategory = (category, value) => {
    this.setState((prevState) => {

      return {
        ...prevState,
        rules: fast.map(prevState.rules, ((rule) => {
          if (rule.category === category) {
            rule.isTurnedOn = value;
          }

          return rule;
        })),
      };
    });
  };

  changeRuleValue = (ruleName, value) => {
    this.setState((prevState) => {
      const rules = [...prevState.rules];

      const changingRuleIndex = rules.findIndex((rule) => rule.name === ruleName);

      if (rules[changingRuleIndex].value !== value) {
        rules[changingRuleIndex].isTurnedOn = true;
      }

      rules[changingRuleIndex].value = value;

      return {
        ...prevState,
        rules: rules,
      };
    });
  };

  changeRuleTurnOnValue = (ruleName, value) => {
    this.setState((prevState) => {
      const rules = [...prevState.rules];

      const changingRuleIndex = rules.findIndex((rule) => rule.name === ruleName);

      rules[changingRuleIndex].isTurnedOn = value;

      return {
        ...prevState,
        rules: rules,
      };
    });
  };

  changeRuleOptionValue = (ruleName, optionName, value) => {
    this.setState((prevState) => {
      const rules = [...prevState.rules];

      const changingRuleIndex = rules.findIndex((rule) => rule.name === ruleName);
      const changingRuleOptionIndex = rules[changingRuleIndex].options.findIndex((option) => option.name === optionName);

      rules[changingRuleIndex].options[changingRuleOptionIndex].value = value;

      if (!rules[changingRuleIndex].options.every((option) => option.value === option.defaultValue)) {
        rules[changingRuleIndex].isTurnedOn = true;
      }

      return {
        ...prevState,
        rules: rules,
      };
    });
  };

  downloadConfig = () => {
    const element = document.createElement('a');
    const file = new Blob([generateConfig(this.state.rules)], { type: 'application/json' });

    element.href = URL.createObjectURL(file);
    element.download = '_.eslintrc.json';
    element.click();
  };

  toggleConfigPreviewer = () => {
    this.setState((prevState) => ({
      ...prevState,
      isConfigPreviewerVisible: !prevState.isConfigPreviewerVisible,
    }));
  };

  closeEditingModeModal = () => {
    this.setState({
      isEditingModeModalVisible: false,
      wasEditingModeModalShowed: true,
    });
  };

  static getDerivedStateFromProps = (props, state) => {

    if (props.match.params && props.match.params.name && state.activeRule && props.match.params.name !== state.activeRule.name) {
      state.filteredRules = fast.map(state.filteredRules, ((rule) => {
        rule.isActive = rule.name === props.match.params.name;

        return rule;
      }));

      state.activeRule = state.rules.find((rule) => rule.name === props.match.params.name);

      const activeRuleIndex = state.filteredRules.findIndex((rule) => rule.name === state.activeRule.name);

      let previousRuleIndex = activeRuleIndex - 1;
      let nextRuleIndex = activeRuleIndex + 1;

      if (previousRuleIndex < 0) {
        previousRuleIndex = state.filteredRules.length - 1;
      } else if (previousRuleIndex > state.filteredRules.length - 1) {
        previousRuleIndex = 0;
      }

      if (nextRuleIndex < 0) {
        nextRuleIndex = state.filteredRules.length - 1;
      } else if (nextRuleIndex > state.filteredRules.length - 1) {
        nextRuleIndex = 0;
      }

      state.nextRule = state.filteredRules[nextRuleIndex];
      state.previousRule = state.filteredRules[previousRuleIndex];
    }

    return state;
  };

  render = () => {

    return (
      <div>
        {
          !this.state.didRulesQueryMount ?
            <Query query={ RULES_QUERY }>
              { ({ error, loading, data }) => {
                if (error) {
                  return <div>Oops, error! { error.message }</div>;
                } else if (loading) {
                  return <Loader/>;
                }

                if (data.rules && data.rules.length) {
                  const sortedRules = data.rules.sort((rule1, rule2) => {
                    if (rule1.name < rule2.name) return -1;
                    if (rule1.name > rule2.name) return 1;

                    return 0;
                  });

                  const possibleErrorsRules = fast.filter(sortedRules, (rule) => rule.category === 'Possible Errors');
                  const bestPracticesRules = fast.filter(sortedRules, (rule) => rule.category === 'Best Practices');
                  const strictModeRules = fast.filter(sortedRules, (rule) => rule.category === 'Strict Mode');
                  const variablesRules = fast.filter(sortedRules, (rule) => rule.category === 'Variables');
                  const nodeJSAndCommonJSRules = fast.filter(sortedRules, (rule) => rule.category === 'Node.js and CommonJS');
                  const stylisticIssuesRules = fast.filter(sortedRules, (rule) => rule.category === 'Stylistic Issues');
                  const ECMAScript6Rules = fast.filter(sortedRules, (rule) => rule.category === 'ECMAScript 6');

                  const rules = [
                    ...possibleErrorsRules,
                    ...bestPracticesRules,
                    ...strictModeRules,
                    ...variablesRules,
                    ...nodeJSAndCommonJSRules,
                    ...stylisticIssuesRules,
                    ...ECMAScript6Rules,
                  ];

                  rules[0].isActive = true; // First element should be active by default

                  this.setState({
                    rules: rules,
                    activeRule: rules[0],
                    previousRule: rules[rules.length - 1],
                    nextRule: rules[1],
                    didRulesQueryMount: true,
                  });

                  this.filterRules();
                }

                return null;
              } }
            </Query>
            :
            <Wrapper>
              <Sidebar
                rules={ this.state.filteredRules }
                onSearchEnterPress={ this.changeSearchingString }
                onCategorySwitcherClick={ this.toggleAllRulesInCategory }
                onRuleSwitcherClick={ this.changeRuleTurnOnValue }
                onDownloadConfigButtonClick={ this.downloadConfig }
                onPreviewConfigButtonClick={ this.toggleConfigPreviewer }
              />
              {
                this.state.isConfigPreviewerVisible ?
                  <ConfigPreviewer rules={ this.state.rules } onCloseButtonClick={ this.toggleConfigPreviewer }/>
                  :
                  <RuleInfo
                    activeRule={ this.state.activeRule }
                    previousRule={ this.state.previousRule }
                    nextRule={ this.state.nextRule }
                    onSelectChange={ this.changeRuleValue }
                    onSwitcherClick={ this.changeRuleTurnOnValue }
                    onOptionChange={ this.changeRuleOptionValue }
                    isEditingModeEnabled={ this.state.isEditingModeEnabled }
                  />
              }
            </Wrapper>
        }

        <ToastContainer
          autoClose={ 5000 }
          closeButton={ false }
          hideProgressBar={ true }
          newestOnTop={ true }
          draggable={ false }
        />

        <EditingModeModal
          isVisible={ this.state.isEditingModeModalVisible && !this.state.wasEditingModeModalShowed }
          onCloseButtonClick={ this.closeEditingModeModal }
        />
      </div>
    );
  };
}
