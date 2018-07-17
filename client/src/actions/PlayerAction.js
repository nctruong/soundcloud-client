import * as types from '../constants/ActionTypes';


export const chooseSong = song => ({
  type: types.PLAY_SONG,
  song,
});

export const playing = song => async (dispatch) => {
  dispatch(chooseSong(song));
}
