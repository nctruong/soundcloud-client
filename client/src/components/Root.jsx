import PropTypes from 'prop-types';
import React from 'react';
import Header from './Header';
import Router from './Router';

const propTypes = {
  playSong: PropTypes.func.isRequired,
};

const Root = (props) => (
  <div>
    <div className="header">
      <Header />
    </div>
    <div className="container">
      <Router />
    </div>
  </div>
);

Root.propTypes = propTypes;
export default Root;
