import * as types from '../constants/ActionTypes';


export const playSong = song => async (dispatch) => {
  dispatch({
    type: types.PLAYING_SONG,
    song,
  });
}
