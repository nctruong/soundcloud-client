import React from 'react';
import { connect } from 'react-redux';
import { playSong } from '../actions/PlayerAction';
import { fetchSongs } from '../actions/SongsActions';
import Home from '../components/Home';

const HomeContainer = props => <Home {...props} />;

const mapStateToProps = (state) => {
  const { songs } = state;
  const currentUser = state.reduxTokenAuth.currentUser;
  return {
    currentUser,
    songs: songs.songs,
  };
};

export default connect(mapStateToProps, {
  fetchSongs,
  playSong,
})(HomeContainer);
