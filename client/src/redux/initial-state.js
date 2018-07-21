const initialState = {
  reduxTokenAuth: {
    currentUser: {
      isLoading: false,
      isSignedIn: false,
      attributes: {
        tokens: '',
        email: '',
        provider: 'email',
        role: 'admin',
        uid: 'admin@gmail.com',
        allow_password_change: false,
        name: 'admin',
        nickname: null,
        image: null,
      },
    },
  },
  // All your other state
}

export default initialState;
