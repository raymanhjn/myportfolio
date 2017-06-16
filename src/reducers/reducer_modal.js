const INITIAL_STATE = {
	modalIsOpen : false,
	modalContent:{},
};

import {OPEN_MODAL,CLOSE_MODAL} from '../actions/modal_actions';

export default function(state=INITIAL_STATE, action) {
	switch(action.type){
		case OPEN_MODAL:
			return action.payload;
		case CLOSE_MODAL:
			return {...state, modalIsOpen:false};
		default:
			return state;
	}
}