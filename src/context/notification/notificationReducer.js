import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_NOTIFICATION:
      return {
        ...state,
        notification: action.payload,
      };
    case REMOVE_NOTIFICATION:
      return {
        ...state,
        notification: null,
      };
    default:
      return state;
  }
};
