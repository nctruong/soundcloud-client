import React from 'react';
import { connect } from 'react-redux';
import SignIn from '../components/SignIn';
import { signInUser } from '../auth/redux-token-auth-config';

const SignInContainer = state => <SignIn {...state} />;

export default connect(null, { signInUser })(SignInContainer);
