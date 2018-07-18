import React from 'react';
import { connect } from 'react-redux';

import Root from '../components/Root';
import SongsContainer from './SongsContainer';
import { INDEX_PATH, SONGS_PATH } from '../constants/RouterConstants';
import { initRouter } from '../actions/RouterActions';
import { playSong } from '../actions/PlayerAction';

const RootContainer = props => <Root {...props} />;

const mapStateToProps = state => {
  const { router } = state;
  return {
    paths: [INDEX_PATH],
    router,
    routes: {
      [INDEX_PATH]: SongsContainer,
      [SONGS_PATH]: SongsContainer,
    },
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initRouter,
    playSong,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
