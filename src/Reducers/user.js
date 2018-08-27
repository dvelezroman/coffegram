import { LOGGED_USER } from '../ActionTypes/index';

const initialState = null;

const user = (state = initialState, action) => {
	switch (action.type) {
		case LOGGED_USER:
			return action.payload.uid;
		default:
			return state;
	}
};

export default user;