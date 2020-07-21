import {
  SEARCH_PROBLEM_OPTIONS,
  SET_LOADING,
  CLEAR_RESULTS,
  CARD_ACTIVATION,
  NEXT_STEP,
  BACK_STEP,
  SEARCH_BAR,
  UPDATE_SELECTED_OPTION,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_PROBLEM_OPTIONS:
      return {
        ...state,
        problemOptions: action.payload.problemOptions,
        problemOptionSubtitle: action.payload.problemOptionSubtitle,
        problemOptionTitle: action.payload.problemOptionTitle,
        loading: false,
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
        problemOptions: action.payload.problemOptions,
        selectedOption: action.payload.selectedOption,
        step: action.payload.step,
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
        selectedOption: action.payload.clonedOption,
        step: action.payload.step,
      };
    default:
      return state;
  }
};