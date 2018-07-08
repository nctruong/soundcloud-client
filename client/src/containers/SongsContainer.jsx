import React from 'react';
import { connect } from 'react-redux';
import Songs from '../components/Songs';
import { fetchSongs } from '../actions/SongsActions';
// import getSongs from '../selectors/CommonSelectors';

const SongsContainer = props => <Songs {...props} />;

// this func is for container
const mapStateToProps = (state) => {
  const { environment } = state;
  const { height } = environment;
  const { songs } = state;
  return {
    songs: songs.songs,
    height,
  };
};
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchSongs,
//   };
// };
export default connect(mapStateToProps, { fetchSongs })(SongsContainer);
