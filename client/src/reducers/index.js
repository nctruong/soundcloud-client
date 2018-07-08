import { combineReducers } from 'redux';
import fetchSongs from './songs';
import router from './router';
import environment from './environment';

const rootReducer = combineReducers({
  environment,
  songs: fetchSongs,
  router,
});

export default rootReducer;
