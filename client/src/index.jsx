/* global document */

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

OfflinePluginRuntime.install();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={configureStore()}>
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
