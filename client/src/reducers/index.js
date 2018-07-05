import { combineReducers } from 'redux';
import playlists from './playlists';
import router from './router';

const rootReducer = combineReducers({
  playlists,
  router,
});

export default rootReducer;
