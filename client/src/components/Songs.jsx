import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Song from './Song';

const propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
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
  //   if (songs !== nextProps.songs) {
  //     fetchSongs();
  //   }
  // }

  render() {
    return (
      <ul className="songs">
        {
          this.props.songs.map((song, idx) => (
            <li className="song" key={song.id}>
              <time dateTime="2014-07-20">
                <span className="day">{idx}</span>
                <span className="month">Jul</span>
                <span className="year">2014</span>
                <span className="time">ALL DAY</span>
              </time>
              <img alt="Independence Day" src={song.artwork_url === '0' ? 'http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg' : song.artwork_url} />
              <Song song={song} playSong={this.props.playSong} />
              <div className="social">
                <ul>
                  <li className="facebook" >
                    <a href="#facebook">
                      <span className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="twitter" >
                    <a href="#twitter">
                      <span className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="linkedin" >
                    <a href="#linkedin">
                      <span className="fa fa-linkedin" />
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
