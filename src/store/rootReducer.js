import { combineReducers } from 'redux'

import playerReducer from '../module/getPlayers';

const rootReducer = combineReducers({
  player: playerReducer,
});
  
export default rootReducer;