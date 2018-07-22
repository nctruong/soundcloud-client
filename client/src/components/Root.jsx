import PropTypes from 'prop-types';
import React from 'react';
import Router from './Router';

const propTypes = {
  currentUser: PropTypes.shape({}).isRequired,
};

const Root = props => <Router {...props} />;

Root.propTypes = propTypes;
export default Root;
