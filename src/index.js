import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';
import fast from 'fast.js';

import { ConfigPreviewer } from 'ui/molecules';
import { Sidebar, RuleInfo } from 'ui/organisms';
import { GlobalStyles } from 'ui/theme';

import { rules } from 'rules';
import { generateConfig } from 'utils';


const Wrapper = styled.div`
  display: flex;
`;


class App extends React.Component {
  state = {
    rules: rules,
    filteredRules: rules,
    activeRule: rules[0],
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
      <React.Fragment>
        <GlobalStyles/>

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
                onOptionSwitcherClick={ this.changeRuleOptionValue }
              />
          }
        </Wrapper>
      </React.Fragment>
    );
  };
}


ReactDOM.render(<App/>, document.getElementById('root'));
