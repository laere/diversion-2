import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Perf from 'react-addons-perf';
//  STORE METHODS
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// MIDDLEWARE
import Thunk from 'redux-thunk';
import Promise from 'redux-promise';
// ROUTING METHODS
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// CONTAINERS
import App from './app/app';
import Home from './components/Home';
import Games from './containers/GamesContainer';
import Streams from './containers/StreamsContainer';
import Videos from './containers/VideosContainer';
import Channels from './containers/ChannelsContainer';
import Search from './containers/SearchContainer';
import Favs from './containers/FavoritesContainer';
//REDUCERS
import rootReducer from './reducers/RootReducer';

import * as storage from 'redux-storage';
const reducer = storage.reducer(rootReducer);

import createEngine from 'redux-storage-engine-localstorage';
const engine = createEngine('my-save-key');


const middleware = storage.createMiddleware(engine);

// Store with middleware.
const createStoreWithMiddleware = compose(
  applyMiddleware(Thunk, Promise, middleware),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)(createStore);

const store = createStoreWithMiddleware(reducer);

const load = storage.createLoader(engine);
load(store)
  .then(newState => console.log('Loaded state:', newState))
  .catch(() => console.log('Failed to load previous state'));

// const basePath = location.hostname === 'localhost' ? '/' : '/diversion-2/'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} >
        <IndexRoute component={Home} />
        <Route path="streams" component={Streams} />
        <Route path="games" component={Games} />
        <Route path="videos" component={Videos} />
        <Route path="channels" component={Channels} />
        <Route path="search" component={Search} />
        <Route path="favorites" component={Favs} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector('.container')
);
