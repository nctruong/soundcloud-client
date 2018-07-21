import PropTypes from 'prop-types';
import React from 'react';
import Header from './Header';
import Router from './Router';

const propTypes = {
  currentUser: PropTypes.shape({}).isRequired,
};

const Root = (props) => (
  <div>
    <div className="container">
      <Router />
    </div>
  </div>
);

Root.propTypes = propTypes;
export default Root;
