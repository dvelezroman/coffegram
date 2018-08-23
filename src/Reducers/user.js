import { INCREMENTA_USER } from '../ActionTypes/index';

const initialState = 0;

const user = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENTA_USER:
			return state + action.payload;
		default:
			return state;
	}
};

export default user;