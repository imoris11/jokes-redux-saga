import { combineReducers } from 'redux'
import jokesReducer from './app/Jokes/redux/reducer';

export const reducers = {
  jokes: jokesReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;