import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//  STORE METHODS
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// MIDDLEWARE
import Thunk from 'redux-thunk';
import Promise from 'redux-promise';
// ROUTING METHODS
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
// CONTAINERS
import App from './app/app';
import Home from './components/Home';
import Games from './containers/GamesContainer';
import Streams from './containers/StreamsContainer';
import Videos from './containers/VideosContainer';
import Channels from './containers/ChannelsContainer';
//REDUCERS
import rootReducer from './reducers/RootReducer';
// Store with middleware.
const createStoreWithMiddleware = compose(
  applyMiddleware(Thunk, Promise),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)(createStore);
const store = createStoreWithMiddleware(rootReducer);


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/diversion-2/" component={App} >
        <IndexRoute component={Home} />
        <Route path="streams" component={Streams} />
        <Route path="games" component={Games} />
        <Route path="videos" component={Videos} />
        <Route path="channels" component={Channels} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector('.container')
);
