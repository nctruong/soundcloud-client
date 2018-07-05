import React from 'react';
import { connect } from 'react-redux';

import Root from '../components/Root';
import SongsContainer from './SongsContainer';
import { INDEX_PATH } from '../constants/RouterConstants';
import { initEnvironment } from '../actions/EnvironmentActions';
import { initRouter } from '../actions/RouterActions';

const RootContainer = props => <Root {...props} />;

// Define above props
const mapStateToProps = state => {
  const { router } = state;
  return {
    paths: [INDEX_PATH],
    router,
    routes: {
      [INDEX_PATH]: SongsContainer,
    },
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initEnvironment,
    initRouter,
  };
}
// Two extra props: initEnvironment & initRouter
export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
