import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import Header from './Header';
import SignIn from './SignIn';
import HomeContainer from '../containers/HomeContainer';

const propTypes = {
  playSong: PropTypes.func.isRequired,
};

const Root = (props) => (
  <div>
    <div className="header">
      <Header />
    </div>
    <div className="container">
      <BrowserRouter>
        <switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/sign_in" component={SignIn} />
        </switch>
      </BrowserRouter>
    </div>
  </div>
);

Root.propTypes = propTypes;
export default Root;
