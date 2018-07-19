import * as types from '../constants/ActionTypes';

const initialState = {
  song: {
    permalink_url: '',
  },
}

export default function player(state = initialState, action) {
  switch (action.type) {
    case types.PLAYING_SONG:
      return {
        ...state,
        song: action.song,
      };
    default:
      return state;
  }
}
