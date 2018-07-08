import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
}

class Song extends Component {
  render() {
    return (
      <div className="song">
        <p>Name: {this.props.song.title}</p>
        <p>Genre: {this.props.song.description}</p>
      </div>
    );
  }
}

Song.propTypes = propTypes;
export default Song;
