/* global document */
/* global window */
import axios from 'axios';
import 'babel-polyfill';
import 'isomorphic-fetch';
import OfflinePluginRuntime from 'offline-plugin/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import '../styles/main.scss';
import RootContainer from './containers/RootContainer';
import { verifyCredentials } from './redux/redux-token-auth-config';

OfflinePluginRuntime.install();

const store = configureStore();
verifyCredentials(store);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <RootContainer />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};
render();

if (module.hot) {
  module.hot.accept('./containers/RootContainer', () => {
    render();
  });
}

window.axios = axios;
