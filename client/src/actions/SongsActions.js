import axios from 'axios';
import * as types from '../constants/ActionTypes';
import { SONGS_URL } from '../constants/ApiConstants';

export const fetchSongs = () => async (dispatch) => {
  const json = await axios.get(SONGS_URL);
  const songs = json.data;
  dispatch({
    type: types.FETCH_SONGS,
    songs,
  });
};

