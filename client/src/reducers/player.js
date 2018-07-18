import * as types from '../constants/ActionTypes';

const initialState = {
  song: {
    permalink_url: 'https://soundcloud.com/c-ng-nguy-n-c-521680842/ben-nhau-nu-cuoi-nguyen-duc-cuong-ft-vu-hanh-nguyen',
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
