import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import { createBrowserHistory } from 'history';
import { generateRequireSignInWrapper } from 'redux-token-auth';
import HomeContainer from '../containers/HomeContainer';
import SignInContainer from '../containers/SignInContainer';

const requireSignIn = generateRequireSignInWrapper({
  redirectPathIfNotSignedIn: '/sign_in',
});

const history = createBrowserHistory({});

const Router = () => (
  <BrowserRouter>
    <switch history={history}>
      <Route exact path="/" component={requireSignIn(HomeContainer)} />
      <Route path="/sign_in" component={SignInContainer} />
    </switch>
  </BrowserRouter>
);

export default Router;
