import { combineReducers } from 'redux';

import NavbarReducer from './reducer_navbar';
const rootReducer = combineReducers({
  	navbar:NavbarReducer
});

export default rootReducer;
