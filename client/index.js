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
import SongDetail from './components/SongDetail.jsx';

// react-apollo glue layer
// out of box makes assumptions about backend

// http://dev.apollodata.com/react/cache-updates.html
const client = new ApolloClient({
  // takes every piece of data and runs it through this function
  // it identifies that data inside the apollo client
  // only works when id's are unique
  dataIdFromObject: o => o.id
});

// param defined as :id
const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="songs/new" component={SongCreate} />
          <Route path="songs/:id" component={SongDetail} />
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
