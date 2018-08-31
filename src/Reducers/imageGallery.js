import { LOAD_IMAGE_TO_UPLOAD, UNLOAD_IMAGE_TO_UPLOAD } from '../ActionTypes/index';
const initialState = {
  image: null,
  comments: null,
  createdAt: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_IMAGE_TO_UPLOAD:
      return { image: action.payload };
    case UNLOAD_IMAGE_TO_UPLOAD:
      return { image: null, comments: null, createdAt: null };
    default:
      return state;
  }
};
