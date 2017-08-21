import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import * as sessionAPI from './util/session_api_util';
import { login } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // const store = configureStore();
  let store;
  if (window.currentUser) {
  const preloadedState = { session: { currentUser: window.currentUser } };
  store = configureStore(preloadedState);
  delete window.currentUser;
  } else {
    store = configureStore();
  }

  // window.store = store;
  // window.login = login;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={ store }/>, root);
});
