import { BrowserRouter, Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from './Header';
import PlayerContainer from '../containers/PlayerContainer';
import SongsContainer from '../containers/SongsContainer';
import { INDEX_PATH, SONGS_PATH } from '../constants/RouterConstants';
import Test from './Test';

const propTypes = {
  playSong: PropTypes.func.isRequired,
};

const Root = (props) => (
  <div>
    {/*<div className="header">*/}
      {/*<Header />*/}
    {/*</div>*/}
    <div className="container">
      <BrowserRouter>
        <switch>
          {/*<div>*/}
            <Route exact path="/" component={SongsContainer} />
            <Route path="/nav" component={Test} />
          {/*</div>*/}
        </switch>
      </BrowserRouter>
    </div>
    <div className="player">
      <PlayerContainer playSong={props.playSong} />
    </div>
  </div>
);

Root.propTypes = propTypes;
export default Root;
