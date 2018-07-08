import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Song from './Song';

/* Clarify the prop types for component. The structure of props need to be clarified
 * because component receives props from Container.
 */
const propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
  fetchSongs: PropTypes.func.isRequired,
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
    console.log('ended feching');
  }

  componentWillReceiveProps(nextProps) {
    const { songs, fetchSongs } = this.props;
    if (songs !== nextProps.songs) {
      fetchSongs();
    }
  }
  render() {
    const { songs } = this.props.songs;
    console.log(`Songs.jsx: ${songs}`);
    return (
      <ul className="list-group">
        {
          this.props.songs.map(song => (
            <li className="list-group-item" key={song.id}>
              <Song song={song} />
            </li>
          ))
        }
      </ul>
    );
  }
}

Songs.defaultProps = defaultProps;
Songs.propTypes = propTypes;
export default Songs;
