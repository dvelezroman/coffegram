import { LOAD_PUBLICATIONS } from '../ActionTypes/index';

const initialState = {
  publications: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PUBLICATIONS:
      return { publications: action.payload };
    default:
      return state;
  }
};