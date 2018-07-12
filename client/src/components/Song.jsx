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
      <div className="song info">
        <div className="title">Name: {this.props.song.title}</div>
        <div className="desc">Genre: {this.props.song.description}</div>
      </div>
    );
  }
}

Song.propTypes = propTypes;
export default Song;
