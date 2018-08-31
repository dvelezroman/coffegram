import { LOGGED_USER, UNLOGGED_USER } from '../ActionTypes/index';

const initialState = null;

const user = (state = initialState, action) => {
	switch (action.type) {
		case LOGGED_USER:
			return action.payload.uid;
		case UNLOGGED_USER:
			return null;
		default:
			return state;
	}
};

export default user;