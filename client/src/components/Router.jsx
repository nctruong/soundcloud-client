import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import { createBrowserHistory } from 'history';
import { generateRequireSignInWrapper } from 'redux-token-auth';
import HomeContainer from '../containers/HomeContainer';
import SignInContainer from '../containers/SignInContainer';
import Profile from './Profile';

const requireSignIn = generateRequireSignInWrapper({
  redirectPathIfNotSignedIn: '/sign_in',
});

const history = createBrowserHistory({});

const Router = (props) => (
  <BrowserRouter>
    <switch history={history}>
      <Route path="/" component={requireSignIn(HomeContainer)} />
      <Route path="/sign_in" component={SignInContainer} />
      <Route path="/profile" component={requireSignIn(Profile)} />
    </switch>
  </BrowserRouter>
);

export default Router;
