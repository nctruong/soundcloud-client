import { combineReducers } from 'redux';
import fetchSongs from './songs';
import router from './router';
import playingSong from './player';

const rootReducer = combineReducers({
  songs: fetchSongs,
  router,
  playingSong,
});

export default rootReducer;
