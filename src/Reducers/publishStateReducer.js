import { SUCCESS_PUBLISH, UNSUCCESS_PUBLISH, RESET_PUBLISH_STATE } from '../ActionTypes/index';

const initial_state = {
  info: null,
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case SUCCESS_PUBLISH:
      return { info: 'SUCCESS' };
    case UNSUCCESS_PUBLISH:
      return { info: 'ERROR' };
    case RESET_PUBLISH_STATE:
      return { info: null };
    default:
      return state;
  }
}