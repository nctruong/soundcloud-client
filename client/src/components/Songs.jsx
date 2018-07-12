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
      <ul className="songs">
        {
          this.props.songs.map(song => (
            <li className="song" key={song.id}>
              <time dateTime="2014-07-20">
                <span className="day">4</span>
                <span className="month">Jul</span>
                <span className="year">2014</span>
                <span className="time">ALL DAY</span>
              </time>
              <img alt="Independence Day" src="https://farm4.staticflickr.com/3100/2693171833_3545fb852c_q.jpg" />
              <Song song={song} />
              <div className="social">
                <ul>
                  <li className="facebook" >
                    <a href="#facebook">
                      <span className="fa fa-facebook" />
                    </a>
                  </li>
                </ul>
              </div>
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
