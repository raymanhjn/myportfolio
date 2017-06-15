const INITIAL_STATE = {
	lastTop : 0,
	small : false,
};

import {TOGGLE_NAVBAR} from '../actions/navbar_action';

export default function(state=INITIAL_STATE, action) {
	switch(action.type){
		case TOGGLE_NAVBAR:
			return action.payload;
		default:
			return state;
	}
}