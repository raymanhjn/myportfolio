const INITIAL_STATE = {
	modalIsOpen : false,
};

import {OPEN_MODAL,CLOSE_MODAL} from '../actions/modal_actions';

export default function(state=INITIAL_STATE, action) {
	switch(action.type){
		case OPEN_MODAL:
			return {...state, modalIsOpen:action.payload};
		case CLOSE_MODAL:
			return {...state, modalIsOpen:action.payload};
		default:
			return state;
	}
}