import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import PlayerContainer from '../containers/PlayerContainer';
import SongsContainer from '../containers/SongsContainer';
import Profile from './Profile';
import Header from './Header';

const propTypes = {
  fetchSongs: PropTypes.func.isRequired,
};

class Home extends Component {
  // componentWillMount() {
  //   const { initSongs } = this.props;
  //   const songs = initSongs();
  // }

  render() {
    console.log(this.props.match);
    const match = this.props.match;
    return (
      <div>
        <div className="header">
          <Header currentUser={this.props.currentUser} />
        </div>
        <div className="container" >
          { match.url == "/" && match.isExact ? <SongsContainer /> : null }
          {this.props.children}
        </div>
        <PlayerContainer />
      </div>
    );
  }
}

Home.propTypes = propTypes;
export default Home;
