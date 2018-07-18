import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Router from './Router';
import Header from './Header';
import PlayerContainer from '../containers/PlayerContainer';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import SongsContainer from "../containers/SongsContainer";

const propTypes = {
  initRouter: PropTypes.func.isRequired,
  router: PropTypes.shape({
    keys: PropTypes.shape({}),
    options: PropTypes.shape({}),
    path: PropTypes.string,
  }).isRequired,
  routes: PropTypes.shape({}).isRequired,
  playSong: PropTypes.func.isRequired,
};
class Root extends Component {
  componentWillMount() {
    const { initRouter } = this.props;
    initRouter();
  }
  render() {
    const { router, routes } = this.props;
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="container">
          <Router router={router} routes={routes} />
        </div>
        <div className="player">
          <PlayerContainer playSong={this.props.playSong} />
        </div>
      </div>
    );
  }
}

Root.propTypes = propTypes;
export default Root;
