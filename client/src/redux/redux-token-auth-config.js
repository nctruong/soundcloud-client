import { generateAuthActions } from 'redux-token-auth';
import { AUTH_URL } from '../constants/ApiConstants';

const config = {
  authUrl: AUTH_URL,
  userAttributes: {
    tokens: '',
    email: '',
    provider: 'email',
    role: 'admin',
    uid: 'admin@gmail.com',
    allow_password_change: true,
    name: 'admin',
    nickname: null,
    image: null,
  },
  userRegistrationAttributes: {
    email: '',
    password: '',
  },
};

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyToken,
  verifyCredentials,
} = generateAuthActions(config)

export {
  registerUser,
  signInUser,
  verifyToken,
  signOutUser,
  verifyCredentials,
}