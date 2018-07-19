import React from 'react';
import { connect } from 'react-redux';

import Root from '../components/Root';
import { playSong } from '../actions/PlayerAction';

const RootContainer = props => <Root {...props} />;

const mapDispatchToProps = () => {
  return {
    playSong,
  };
};

export default connect(mapDispatchToProps)(RootContainer);
