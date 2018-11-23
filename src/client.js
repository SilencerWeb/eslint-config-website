import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { split } from 'apollo-link';

import { env, config } from 'config';


const token = localStorage.getItem('AUTH_TOKEN');


const httpLink = new HttpLink({
  uri: env === 'local' ? `http://${config.PRISMA_ENDPOINT}` : `https://${config.PRISMA_ENDPOINT}`,
});

const middlewareAuthLink = setContext((request, { headers }) => {
  return {
    ...headers,
    headers: {
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});

const httpLinkWithAuthToken = middlewareAuthLink.concat(httpLink);


const wsLink = new WebSocketLink({
  uri: env === 'local' ? `ws://${config.PRISMA_ENDPOINT}` : `wss://${config.PRISMA_ENDPOINT}`,
  options: {
    reconnect: true,
    connectionParams: {
      authToken: token ? `Bearer ${token}` : null,
    },
  },
});


const isSubscriptionOperation = ({ query }) => {
  const { kind, operation } = getMainDefinition(query);
  return kind === 'OperationDefinition' && operation === 'subscription';
};

const requestLink = split(isSubscriptionOperation, wsLink, httpLinkWithAuthToken);


export const client = new ApolloClient({
  link: requestLink,
  cache: new InMemoryCache(),
});
