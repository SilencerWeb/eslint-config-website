import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

import { Sidebar, RuleInfo } from 'ui/organisms';
import { GlobalStyles } from 'ui/theme';

import { rules } from './rules';


const Wrapper = styled.div`
  display: flex;
`;


class App extends React.Component {
  state = {
    rules: rules,
    filteredRules: rules,
    activeRule: rules[0],
    searchingString: '',
  };

  filterRules = () => {
    this.setState((prevState) => {
      const rulesMatchedByName = prevState.rules.filter((rule) => rule.name.includes(prevState.searchingString));
      const rulesMatchedByShortDescription = prevState.rules.filter((rule) => rule.shortDescription.includes(prevState.searchingString));

      const filteredRules = [...rulesMatchedByName, ...rulesMatchedByShortDescription];

      const filteredRulesWithoutCopies = filteredRules.filter((rule, i, rules) => !rules.includes(rule, i + 1));

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
        rules: prevState.rules.map((rule) => {
          rule.isActive = rule.name === activeRuleName;

          return rule;
        }),
        activeRule: prevState.rules.find((rule) => rule.name === activeRuleName),
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

  downloadConfig = () => {
    let rulesAsString = '';

    this.state.rules.filter((rule) => rule.isTurnedOn).forEach((rule, i, rules) => {
      rulesAsString += `    "${rule.name}": "${rule.value}"`;

      if (i !== rules.length - 1) {
        rulesAsString += ',\n';
      }
    });

    const element = document.createElement('a');
    const file = new Blob([`{
  "rules": {
${rulesAsString}
  }
}`], { type: 'application/json' });

    element.href = URL.createObjectURL(file);
    element.download = '_.eslintrc.json';
    element.click();
  };

  render = () => {

    return (
      <React.Fragment>
        <GlobalStyles/>

        <Wrapper>
          <Sidebar
            rules={ this.state.filteredRules }
            onSearchChange={ this.changeSearchingString }
            onSwitcherClick={ this.changeRuleTurnOnValue }
            onRuleClick={ this.setActiveRule }
            onDownloadConfigButtonClick={ this.downloadConfig }
          />
          <RuleInfo
            rule={ this.state.activeRule }
            onSelectChange={ this.changeRuleValue }
            onPreviousOrNextButtonClick={ this.setActiveRule }
            onSwitcherClick={ this.changeRuleTurnOnValue }
          />
        </Wrapper>
      </React.Fragment>
    );
  };
}


ReactDOM.render(<App/>, document.getElementById('root'));
