import { combineReducers } from 'redux'

import playerReducer from '../Home/module/getPlayers';

const rootReducer = combineReducers({
  player: playerReducer,
});
  
export default rootReducer;