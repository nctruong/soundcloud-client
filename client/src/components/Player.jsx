import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

const propType = {
  playingSong: PropTypes.shape({
    permalink_url: PropTypes.string.isRequired,
  }).isRequired,
}
class Player extends Component {
  componentWillMount() {
  }
  render() {
    return (
      <div className="player">
        <ReactPlayer
          controls={false}
          height={80}
          playing
          loop={false}
          wrapper={'div'}
          url={this.props.playingSong.permalink_url}
        />
      </div>
    );
  }
}

Player.propTypes = propType;
export default Player;

