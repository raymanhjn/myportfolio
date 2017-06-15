import { combineReducers } from 'redux';

import NavbarReducer from './reducer_navbar';
import ModalReducer from './reducer_modal';
const rootReducer = combineReducers({
  	navbar:NavbarReducer,
  	modal:ModalReducer,
});

export default rootReducer;
