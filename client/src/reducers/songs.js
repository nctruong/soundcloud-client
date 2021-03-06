import * as types from '../constants/ActionTypes';

const initialState = {
  songs: {
    count: 1,
    per: 10,
    tracks: [],
  },
};

export default function fechSongs(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_SONGS:
      return {
        ...state,
        songs: action.songs,
      };
    default:
      return state;
  }
}

