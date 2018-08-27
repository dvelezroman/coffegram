import { START_SESSION, CLOSE_SESSION } from '../ActionTypes/index';

const INITIAL_STATE = null;

const sessionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_SESSION:
      return action.payload;
    case CLOSE_SESSION:
      return null;
    default:
      return state;
  }
};

export default sessionReducer;