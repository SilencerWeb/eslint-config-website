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
    activeRule: rules[0],
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

  render = () => {

    return (
      <React.Fragment>
        <GlobalStyles/>

        <Wrapper>
          <Sidebar rules={ this.state.rules } handleRuleClick={ this.setActiveRule }/>
          <RuleInfo
            name={ this.state.activeRule.name }
            shortDescription={ this.state.activeRule.shortDescription }
            longDescription={ this.state.activeRule.longDescription }
            examples={ this.state.activeRule.examples }
            setActiveRule={ this.setActiveRule }
          />
        </Wrapper>
      </React.Fragment>
    );
  };
}


ReactDOM.render(<App/>, document.getElementById('root'));
