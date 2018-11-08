import axios from 'axios';

export const GET_PLAYERS = 'GET_PLAYERS';
export const GET_PLAYERS_RECEIVED = 'GET_PLAYERS_RECEIVED';
export const GET_PLAYERS_ERROR = 'GET_PLAYERS_ERROR';

export const getAvailablePlayers = (dispatch) => {
  dispatch({ type: GET_PLAYERS })
  // debugger;
  return dispatch => axios.get(`https://api.fantasydata.net/v3/nfl/stats/json/Players`, {
    headers: { 'Ocp-Apim-Subscription-Key': 'd2531025400b4604a1d0470935625c1c' },
  }).then((response) => {
    // console.log(response.data);
    dispatch({ type: GET_PLAYERS_RECEIVED, players: response.data })
    debugger;
  }).catch(error => {
    console.log(error);
    dispatch({ type: GET_PLAYERS_ERROR, error })
  });
}

const initialState = {
  loading: false,
  error: false,
  results: [],
}

export default function playerReducer(state = initialState, action) {
  switch(action.type) {
    case GET_PLAYERS:
      return { ...state, loading: true, error: false }
    case GET_PLAYERS_RECEIVED:
      return { ...state, loading: false, results: action.players }
    case GET_PLAYERS_ERROR:
      return { ...state, loading: false, error: true }; 
    default:
      return state;
  }
}

