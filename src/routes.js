import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { RulePage } from './pages/rule';


export const Routes = () => (
  <Switch>
    <Route path={ '/' } exact component={ RulePage }/>
    <Route path={ '/rules/:name' } exact component={ RulePage }/>
  </Switch>
);
