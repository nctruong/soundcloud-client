import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
}

class Song extends Component {

  playSong(e) {
    console.log('song' + e.target.value);
  }

  render() {
    return (
      <div className="song info">`
        <div className="title">
          <a onClick={(e) => this.playSong(e)}>Name: {this.props.song.title}</a>
        </div>
        <div className="desc">
          <p>Description: {this.props.song.description}</p>
          <p>Author: Will</p>
        </div>
      </div>
    );
  }
}

Song.propTypes = propTypes;
export default Song;
