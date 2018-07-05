import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Router from './Router';

// Clarify the structure of Props
const propTypes = {
  initEnvironment: PropTypes.func.isRequired,
  initRouter: PropTypes.func.isRequired,
  // paths: PropTypes.arrayOf(PropTypes.string).isRequired,
  router: PropTypes.shape({
    keys: PropTypes.shape({}),
    options: PropTypes.shape({}),
    path: PropTypes.string,
  }).isRequired,
  routes: PropTypes.shape({}).isRequired,
};
class Root extends Component {
  componentWillMount() {
    // user {} to inspect props, mapping key.
    const { initEnvironment, initRouter } = this.props;
    // props are the callback functions so that we can execute them
    initEnvironment();
    initRouter();
  }
  render() {
    // They were set in router reducer
    const { router, routes } = this.props;
    return (
      <div>
        Root Component
        <Router router={router} routes={routes} />
      </div>
    );
  }
}

Root.propTypes = propTypes;
// Component does not connect to redux
export default Root;
