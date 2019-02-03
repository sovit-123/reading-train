import { combineReducers } from 'redux';
import fetchReducer from './fetch';

const rootReducer = combineReducers({
  fetchState: fetchReducer
});


export default rootReducer;