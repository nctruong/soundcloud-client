import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Song from './Song';

const propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  fetchSongs: PropTypes.func.isRequired,
  playSong: PropTypes.func.isRequired,
};
const defaultProps = {
  songs: [
    {
      id: 1,
      title: 'Why not me?',
      description: 'pop',
    },
    {
      id: 2,
      title: 'Lemon tree',
      description: 'pop',
    },
  ],
}

class Songs extends Component {
  componentWillMount() {
    const { fetchSongs } = this.props;
    fetchSongs();
  }

  // componentWillReceiveProps(nextProps) {
  //   const { songs, fetchSongs } = this.props;
  //   if (songs.length !== nextProps.songs.length) {
  //     fetchSongs();
  //   }
  // }

  render() {
    const songs = this.props.songs.map((song) => (
      <Song song={song} playSong={this.props.playSong} key={song.id} />
    ));

    return (
      <div>
        <div className="col-md-6">
          <ul className="songs">
            {songs}
          </ul>
        </div>
        <div className="col-md-6">
          <ul className="songs">
            {songs}
          </ul>
        </div>
      </div>
    );
  }
}

Songs.defaultProps = defaultProps;
Songs.propTypes = propTypes;
export default Songs;
