import {
  SEARCH_PROBLEM_OPTIONS,
  SET_LOADING,
  CLEAR_RESULTS,
  CARD_ACTIVATION,
  NEXT_STEP,
  BACK_STEP,
  SEARCH_BAR,
  UPDATE_SELECTED_OPTION,
  NO_MATCHES,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_PROBLEM_OPTIONS:
      return {
        ...state,
        problemOptions: action.payload.problemOptions,
        step: action.payload.step,
        loading: false,
        noMatches: action.payload.noMatches,
      };
    case CLEAR_RESULTS:
      return {
        ...state,
        problemOptions: [],
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CARD_ACTIVATION:
      return {
        ...state,
        problemOptions: action.payload,
      };
    case NEXT_STEP:
      return {
        ...state,
        step: action.payload,
      };
    case BACK_STEP:
      return {
        ...state,
        step: action.payload,
      };
    case SEARCH_BAR:
      return {
        ...state,
        search: action.payload,
      };
    case UPDATE_SELECTED_OPTION:
      return {
        ...state,
        selectedOption: action.payload,
      };
    case NO_MATCHES:
      return {
        ...state,
        loading: false,
        noMatches: action.payload,
      };
    default:
      return state;
  }
};
