import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from 'ui/theme';

import { Routes } from 'routes';

import 'react-tooltip/dist/react-tooltip.css'


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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>, )


if (module.hot) {
  module.hot.accept();
}
