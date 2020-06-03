import { OPEN_SIDE_NAVIGATION, CLOSE_SIDE_NAVIGATION } from '../types';

export default (state, action) => {
  switch (action.type) {
    case OPEN_SIDE_NAVIGATION:
      return {
        ...state,
        openSideNav: true,
      };
    case CLOSE_SIDE_NAVIGATION:
      return {
        ...state,
        openSideNav: false,
      };
    default:
      return state;
  }
};
