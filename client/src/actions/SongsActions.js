// import { callApi } from '../utils/ApiUtils';
import axios from 'axios';
import * as types from '../constants/ActionTypes';
import { SONGS_URL } from '../constants/ApiConstants';

export const fetchSongsSuccess = songs => ({
  type: types.FETCH_SONGS_SUCCESS,
  songs,
})
export const fetchSongs = () => async (dispatch) => {
  console.log('fetchSongs. before calling api')
  const json = await axios.get(SONGS_URL);
  const songs = json.data;
  console.log(`fetchSongs: ${JSON.stringify(songs)}, url: ${SONGS_URL}`)

  dispatch(fetchSongsSuccess(songs));
};


