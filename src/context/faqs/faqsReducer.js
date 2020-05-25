import { SEARCH_LEGAL_DEFINITION, CLEAR_RESULTS, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_LEGAL_DEFINITION:
      return {
        ...state,
        legalDefinitions: action.payload,
        loading: false,
      };

    case CLEAR_RESULTS:
      return {
        ...state,
        legalDefinitions: [],
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
