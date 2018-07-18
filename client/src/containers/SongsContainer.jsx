import React from 'react';
import { connect } from 'react-redux';
import Songs from '../components/Songs';
import { fetchSongs } from '../actions/SongsActions';
import { playSong } from '../actions/PlayerAction';

const SongsContainer = props => <Songs {...props} />;

const mapStateToProps = (state) => {
  const { songs } = state;
  return {
    songs: songs.songs,
  };
};

export default connect(mapStateToProps, { fetchSongs, playSong })(SongsContainer);
