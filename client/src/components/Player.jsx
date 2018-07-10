import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class Player extends Component {
  render() {
    return (
      <div className="col-md-12">
        <ReactPlayer
          controls
          width
          height
          playing={false}
          loop={false}
          wrapper={'div'}
          url={'https://soundcloud.com/c-ng-nguy-n-c-521680842/ben-nhau-nu-cuoi-nguyen-duc-cuong-ft-vu-hanh-nguyen'}
        />
      </div>
    );
  }
}

