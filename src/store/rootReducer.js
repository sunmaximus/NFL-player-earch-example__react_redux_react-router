import { combineReducers } from 'redux'

import playerReducer from '../share/module/getPlayers';

const rootReducer = combineReducers({
  player: playerReducer,
});
  
export default rootReducer;