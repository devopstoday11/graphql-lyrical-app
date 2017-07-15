import './style/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
// rendering agnostic, client side can use angular or anything
import ApolloClient from 'apollo-client';
// react integration
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';
import SongList from './components/SongList.jsx';
import SongCreate from './components/SongCreate.jsx';

// react-apollo glue layer
// out of box makes assumptions about backend
const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="songs/new" component={SongCreate} />
        </Route>
      </Router>
    </ApolloProvider>
  )
};
// apollo store
// exists on client side
// a client side repo
// what is going on inside that store
// http://dev.apollodata.com/react/redux.html

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
