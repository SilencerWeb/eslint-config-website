import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';
import { ApolloProvider, Query } from 'react-apollo';
import fast from 'fast.js';

import { ConfigPreviewer } from 'ui/molecules';
import { Sidebar, RuleInfo } from 'ui/organisms';
import { GlobalStyles } from 'ui/theme';

import { RULES_QUERY } from 'graphql/queries/rule';
import { client } from 'client';
import { generateConfig } from 'utils';


const Wrapper = styled.div`
  display: flex;
`;


class App extends React.Component {
  state = {
    rules: [],
    filteredRules: [],
    activeRule: null,
    searchingString: '',
    isConfigPreviewerVisible: false,
    isEditingModeEnabled: false,
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
      this.setState({
        isEditingModeEnabled: value === 'TURN ON EDITING MODE',
      });
    } else {
      this.setState({
        searchingString: value,
      }, this.filterRules);
    }
  };

  setActiveRule = (activeRuleName) => {

    this.setState((prevState) => {
      if (activeRuleName === 'previous' || activeRuleName === 'next') {
        const activeRuleIndex = prevState.rules.findIndex((rule) => rule.name === prevState.activeRule.name);
        let newActiveRuleIndex = activeRuleName === 'previous' ? activeRuleIndex - 1 : activeRuleIndex + 1;

        if (newActiveRuleIndex < 0) {
          newActiveRuleIndex = prevState.rules.length - 1;
        } else if (newActiveRuleIndex > prevState.rules.length - 1) {
          newActiveRuleIndex = 0;
        }

        activeRuleName = prevState.rules[newActiveRuleIndex].name;
      }

      return {
        ...prevState,
        rules: fast.map(prevState.rules, ((rule) => {
          rule.isActive = rule.name === activeRuleName;

          return rule;
        })),
        activeRule: prevState.rules.find((rule) => rule.name === activeRuleName),
      };
    });
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

  openConfigPreviewer = () => {
    this.setState({ isConfigPreviewerVisible: true });
  };

  closeConfigPreviewer = () => {
    this.setState({ isConfigPreviewerVisible: false });
  };

  render = () => {

    return (
      <ApolloProvider client={ client }>
        <GlobalStyles/>

        {
          !this.state.didRulesQueryMount ?
            <Query query={ RULES_QUERY }>
              { ({ error, loading, data }) => {
                if (error) {
                  return <div>Oops, error! ${ error.message }</div>;
                } else if (loading) {
                  return <div>Loading, please wait...</div>;
                }

                if (data.rules && data.rules.length) {
                  this.setState({
                    rules: data.rules,
                    activeRule: data.rules[0],
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
                onRuleClick={ this.setActiveRule }
                onDownloadConfigButtonClick={ this.downloadConfig }
                onPreviewConfigButtonClick={ this.openConfigPreviewer }
              />
              {
                this.state.isConfigPreviewerVisible ?
                  <ConfigPreviewer rules={ this.state.rules } onCloseButtonClick={ this.closeConfigPreviewer }/>
                  :
                  <RuleInfo
                    rule={ this.state.activeRule }
                    onSelectChange={ this.changeRuleValue }
                    onPreviousOrNextButtonClick={ this.setActiveRule }
                    onSwitcherClick={ this.changeRuleTurnOnValue }
                    onOptionChange={ this.changeRuleOptionValue }
                    isEditingModeEnabled={ this.state.isEditingModeEnabled }
                  />
              }
            </Wrapper>
        }
      </ApolloProvider>
    );
  };
}


ReactDOM.render(<App/>, document.getElementById('root'));
