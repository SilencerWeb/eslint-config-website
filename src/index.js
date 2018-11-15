import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

import { Sidebar, RuleInfo } from 'ui/organisms';
import { GlobalStyles } from 'ui/theme';


const Wrapper = styled.div`
  display: flex;
`;


class App extends React.Component {
  state = {
    rules: [
      {
        name: 'for-direction',
        description: 'Enforce “for” loop update clause moving the counter in the right direction',
        isActive: true,
        isChecked: true,
      },
      {
        name: 'getter-return',
        description: 'Enforce return statements in getters',
        isActive: false,
        isChecked: false,
      },
      {
        name: 'no-async-promise-executor',
        description: 'Enforce “for” loop update clause moving the counter in the right direction.',
        isActive: false,
        isChecked: false,
      },
      {
        name: 'no-await-in-loop',
        description: 'Enforce “for” loop update clause moving the counter in the right direction.',
        isActive: false,
        isChecked: true,
      },
      {
        name: 'no-compare-neg-zero',
        description: 'Enforce “for” loop update clause moving the counter in the right direction.',
        isActive: false,
        isChecked: false,
      },
      {
        name: 'no-cond-assign',
        description: 'Enforce “for” loop update clause moving the counter in the right direction.',
        isActive: false,
        isChecked: false,
      },
      {
        name: 'no-console',
        description: 'Enforce “for” loop update clause moving the counter in the right direction.',
        isActive: false,
        isChecked: false,
      },
      {
        name: 'no-constant-condition',
        description: 'Enforce “for” loop update clause moving the counter in the right direction.',
        isActive: false,
        isChecked: true,
      },
      {
        name: 'no-control-regex',
        description: 'Enforce “for” loop update clause moving the counter in the right direction.',
        isActive: false,
        isChecked: true,
      },
    ],
    activeRule: {
      name: 'for-direction',
      description: 'Enforce “for” loop update clause moving the counter in the right direction',
      isActive: true,
      isChecked: true,
    },
  };

  setActiveRule = (activeRuleName) => {

    this.setState((prevState) => ({
      ...prevState,
      rules: prevState.rules.map((rule) => {
        rule.isActive = rule.name === activeRuleName;

        return rule;
      }),
      activeRule: prevState.rules.find((rule) => rule.name === activeRuleName),
    }));
  };

  render = () => {

    return (
      <React.Fragment>
        <GlobalStyles/>

        <Wrapper>
          <Sidebar rules={ this.state.rules } handleRuleClick={ this.setActiveRule }/>
          <RuleInfo
            name={ this.state.activeRule.name }
            description={ this.state.activeRule.description }
            setActiveRule={ this.setActiveRule }
          />
        </Wrapper>
      </React.Fragment>
    );
  };
}


ReactDOM.render(<App/>, document.getElementById('root'));
