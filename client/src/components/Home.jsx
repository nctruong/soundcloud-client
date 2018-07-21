import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlayerContainer from '../containers/PlayerContainer';
import SongsContainer from '../containers/SongsContainer';
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
    return (
      <div>
        <div className="header">
          <Header currentUser={this.props.currentUser} />
        </div>
        <SongsContainer />
        <PlayerContainer />
      </div>
    );
  }
}

Home.propTypes = propTypes;
export default Home;
