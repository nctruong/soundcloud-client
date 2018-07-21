import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  playSong: PropTypes.func.isRequired,
}

class Song extends Component {

  playSong = (e) => {
    const playSong = this.props.playSong;
    playSong(this.props.song)
  }

  render() {
    return (
      <li className="song" key={this.props.song.id}>
        {/*<time dateTime="2014-07-20">*/}
          {/*<span className="day">1</span>*/}
          {/*<span className="month"><p>Will</p></span>*/}
          {/*<span className="year">2014</span>*/}
          {/*<span className="time">ALL DAY</span>*/}
        {/*</time>*/}
        <img alt="Independence Day" src={this.props.song.artwork_url === '0' ? 'http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg' : this.props.song.artwork_url} />
        <div className="song info">
          <div className="title">
            <a onClick={this.playSong} >Name: {this.props.song.title}</a>
          </div>
          <div className="desc">
            <p>Author: {}</p>
          </div>
        </div>
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

    );
  }
}

Song.propTypes = propTypes;
export default Song;
