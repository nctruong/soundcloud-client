import { combineReducers } from 'redux';
import { reduxTokenAuthReducer } from 'redux-token-auth';
import fetchSongs from './songs';
import playingSong from './player';

const rootReducer = combineReducers({
  reduxTokenAuth: reduxTokenAuthReducer,
  songs: fetchSongs,
  playingSong,
});

export default rootReducer;
