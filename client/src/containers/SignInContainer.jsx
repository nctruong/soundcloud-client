import React from 'react';
import { connect } from 'react-redux';
import SignIn from '../components/SignIn';
import { signInUser } from '../redux/redux-token-auth-config';

const SignInContainer = state => <SignIn {...state} />;

const mapStateToProps = state => {
  const currentUser = state.reduxTokenAuth.currentUser;
  return {
    currentUser,
  };
};
export default connect(mapStateToProps, { signInUser })(SignInContainer);
