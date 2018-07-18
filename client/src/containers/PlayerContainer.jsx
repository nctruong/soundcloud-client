import React from 'react';
import { connect } from 'react-redux';
import Player from '../components/Player';

const PlayerContainer = state => <Player {...state} />;

const mapStateToProps = state => {
  return {
    currentSong: state.songs.currentSong,
    playingSong: state.playingSong.song,
  };
};

export default connect(mapStateToProps)(PlayerContainer);