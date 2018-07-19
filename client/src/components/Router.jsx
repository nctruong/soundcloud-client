import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import { generateRequireSignInWrapper } from 'redux-token-auth';
import HomeContainer from '../containers/HomeContainer';
import SignInContainer from '../containers/SignInContainer';

const requireSignIn = generateRequireSignInWrapper({
  redirectPathIfNotSignedIn: '/sign_in',
})

const Router = () => (
  <BrowserRouter>
    <switch>
      <Route exact path="/" component={requireSignIn(HomeContainer)} />
      <Route path="/sign_in" component={SignInContainer} />
    </switch>
  </BrowserRouter>
)

export default Router;
