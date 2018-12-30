import * as React from 'react';
import styled from 'styled-components';
import fast from 'fast.js';

import { ConfigPreviewer } from '../ui/molecules';
import { Sidebar, RuleInfo } from '../ui/organisms';

import { generateConfig } from '../utils';
import { rules } from '../rules';


const Wrapper = styled.div`
  display: flex;
`;


export class RulePage extends React.Component {
  state = {
    rules: rules,
    filteredRules: rules,

    previousRule: rules[rules.length - 1],
    activeRule: rules[0],
    nextRule: rules[1],

    searchingString: '',

    isConfigPreviewerVisible: false,
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
    this.setState({ searchingString: value }, this.filterRules);
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

  static getDerivedStateFromProps = (props, state) => {

    if (props.match.params && props.match.params.name && state.activeRule && props.match.params.name !== state.activeRule.name) {
      state.filteredRules = fast.map(state.filteredRules, ((rule) => {
        rule.isActive = rule.name === props.match.params.name;

        return rule;
      }));

      state.activeRule = state.filteredRules.find((rule) => rule.name === props.match.params.name);

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

      state.isConfigPreviewerVisible = false;
    } else if (!props.match.params) {
      state.filteredRules = fast.map(state.filteredRules, ((rule, i) => {
        rule.isActive = i === 0;

        return rule;
      }));
    }

    return state;
  };

  render = () => {

    return (
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
            />
        }
      </Wrapper>
    );
  };
}
