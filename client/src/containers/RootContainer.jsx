import React from 'react';
import { connect } from 'react-redux';

import Root from '../components/Root';
import { playSong } from '../actions/PlayerAction';

const RootContainer = props => <Root {...props} />;

const mapStateToProps = state => {
  const currentUser = state.reduxTokenAuth.currentUser;
  return {
    currentUser,
  };
};

export default connect(mapStateToProps, null)(RootContainer);
