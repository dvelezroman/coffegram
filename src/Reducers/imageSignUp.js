import { LOAD_IMAGE, CLEAR_IMAGE } from '../ActionTypes/index';

const INITIAL_STATE = {
  image: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_IMAGE:
      return { image: action.payload };
    case CLEAR_IMAGE:
      return { image: null };
    default: return state;
  }
};