/* global document */
/* global window */
import 'babel-polyfill';
import 'isomorphic-fetch';
import axios from 'axios';
import OfflinePluginRuntime from 'offline-plugin/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import '../styles/main.scss';
import RootContainer from './containers/RootContainer';
import { verifyCredentials } from './auth/redux-token-auth-config';

OfflinePluginRuntime.install();

const store = configureStore();
verifyCredentials(store);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(RootContainer);

if (module.hot) {
  module.hot.accept('./containers/RootContainer', () => {
    render(RootContainer);
  });
}
