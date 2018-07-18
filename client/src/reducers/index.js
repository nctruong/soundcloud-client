import { combineReducers } from 'redux';
import fetchSongs from './songs';
import router from './router';
import playingSong from './player';

const rootReducer = combineReducers({
  songs: fetchSongs,
  playingSong,
});

export default rootReducer;
