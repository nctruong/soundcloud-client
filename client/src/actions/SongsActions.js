/* global window */
import * as types from '../constants/ActionTypes';
import { SONGS_URL } from '../constants/ApiConstants';

export const fetchSongs = (page = 1) => async (dispatch) => {
  const response = await window.axios.get(SONGS_URL, {
    params: {
      page,
    },
  });
  const songs = response.data;
  dispatch({
    type: types.FETCH_SONGS,
    songs,
    playingSong: songs[0],
  });
};
