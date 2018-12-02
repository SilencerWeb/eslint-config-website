import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from 'ui/theme';

import { client } from 'client';
import { Routes } from 'routes';


class App extends React.Component {

  render = () => {

    return (
      <ApolloProvider client={ client }>
        <GlobalStyles/>

        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </ApolloProvider>
    );
  };
}


ReactDOM.render(<App/>, document.getElementById('root'));


if (module.hot) {
  module.hot.accept();
}
