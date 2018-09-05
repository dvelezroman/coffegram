import { LOAD_PUBLICATIONS_TO_STORE, UNLOAD_PUBLICATIONS_TO_STORE } from '../ActionTypes/index';

const initialState = {
  publications: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PUBLICATIONS_TO_STORE:
      return { publications: action.payload };
    case UNLOAD_PUBLICATIONS_TO_STORE:
      return { publications: [] };
    default:
      return state;
  }
};