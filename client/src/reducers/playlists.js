import * as types from '../constants/ActionTypes';

const initialState = {
  items: [],
};

export default function playlists(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_SONGS_SUCCESS:
      return {
        ...state,
        futureUrl: action.futureUrl,
      };
    default:
      return state;
  }
}

