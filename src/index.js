import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from './ui/theme';

import { Routes } from './routes';


class App extends React.Component {

  render = () => {

    return (
      <React.Fragment>
        <GlobalStyles/>

        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </React.Fragment>
    );
  };
}


ReactDOM.render(<App/>, document.getElementById('root'));


if (module.hot) {
  module.hot.accept();
}
