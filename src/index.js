import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Sidebar } from 'ui/organisms';
import { GlobalStyles } from 'ui/theme';


class App extends React.Component {
  state = {
    rules: [
      {
        name: 'for-direction',
        description: 'Enforce “for” loop update clause moving the counter in the right direction',
        isActive: false,
        isChecked: true,
      },
      {
        name: 'getter-return',
        description: 'Enforce return statements in getters',
        isActive: true,
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
  };

  render = () => {

    return (
      <React.Fragment>
        <GlobalStyles/>

        <Sidebar rules={ this.state.rules }/>
      </React.Fragment>
    );
  };
}


ReactDOM.render(<App/>, document.getElementById('root'));
