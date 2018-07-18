import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class Player extends Component {
  componentWillMount() {
  }
  render() {
    const playingSong = this.props.playingSong
    return (
      <ReactPlayer
        controls={false}
        width
        height={80}
        playing
        loop={false}
        wrapper={'div'}
        url={playingSong.permalink_url}
      />
    );
  }
}

