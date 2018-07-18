import * as types from '../constants/ActionTypes';

const initialState = {
  songs: [],
};

export default function fechSongs(state = initialState, action) {
  console.log(action);
  console.log(action.songs);
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

