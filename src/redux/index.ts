import {configureStore} from '@reduxjs/toolkit';

import axios from 'axios';

//actions
export const onUserLogin = ({email, password}) => {
  return async dispatch => {
    try {
      const response = await axios.post('URL', {email, password});
      dispatch({type: 'DO_LOGIN', payload: response.data});
    } catch (error) {
      dispatch({type: 'ON_ERROR', payload: error});
    }
  };
};

export const onFetchRun = () => {
  return async dispatch => {
    try {
      const response = {data: [{name: 'MacbookPro', price: '1500'}]};
      dispatch({type: 'FETCH_RUNS', payload: response.data});
    } catch (error) {
      dispatch({type: 'ON_ERROR', payload: error});
    }
  };
};

// reducers

const userReducer = (state = {}, action) => {
  switch (action.payload) {
    case 'DO_LOGIN':
      return {...state, user: action.payload};

    case 'FETCH_RUNS':
      return {...state, runs: action.payload};

    case 'ON_ERROR':
      return {...state, appError: action.payload};

    default:
      return state;
  }
};
// root reducer
export const rootReducer = {
  userReducer,
};
// store
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});
