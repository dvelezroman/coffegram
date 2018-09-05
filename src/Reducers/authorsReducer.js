import { LOAD_AUTHORS_TO_STORE, UNLOAD_AUTHORS_TO_STORE } from '../ActionTypes/index';

const initial_state = {
  authors: [],
}

export default (state = initial_state, action) => {
  switch (action.type) {
    case LOAD_AUTHORS_TO_STORE:
      return { authors: action.payload };
    case UNLOAD_AUTHORS_TO_STORE:
      return { authors: [] };
    default:
      return state;
  }
};
