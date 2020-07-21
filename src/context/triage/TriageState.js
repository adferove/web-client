import React, { useReducer } from 'react';
import TriageContext from './triageContext';
import TriageReducer from './triageReducer';
//import Api from '../../common/api';
import topLegalProblems from '../../common/topLegalProblems.json';
import drinkDrivingProblems from '../../common/drinkDrivingProblems.json';
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

const TriageState = (props) => {
  const initialState = {
    problemOptionSubtitle: 'Not sure what you’re looking for?',
    problemOptionTitle: 'Select from these common problems',
    problemOptions: topLegalProblems,
    loading: false,
    search: '',
    selectedOption: null,
    step: 1,
  };

  const [state, dispatch] = useReducer(TriageReducer, initialState);

  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  const next = () => {
    let payload = null;
    if (state.step === 2) {
      if (
        state.selectedOption.aboutYouSteps > 1 &&
        state.selectedOption.aboutYouCurrent <
          state.selectedOption.aboutYouSteps
      ) {
        const clonedOption = { ...state.selectedOption };
        const increment = state.selectedOption.aboutYouCurrent + 1;
        clonedOption.aboutYouCurrent = increment;
        updateSelectedOption(clonedOption);
      } else {
        payload = state.step + 1;
      }
    } else {
      payload = state.step + 1;
    }

    if (payload) {
      dispatch({
        type: NEXT_STEP,
        payload,
      });
    }
  };

  const updateSelectedOption = (clonedOption) => {
    dispatch({
      type: UPDATE_SELECTED_OPTION,
      payload: { clonedOption, step: state.step },
    });
  };

  const back = () => {
    let payload = state.step - 1;
    dispatch({
      type: BACK_STEP,
      payload,
    });
  };

  const searchBarChange = (input) => {
    dispatch({
      type: SEARCH_BAR,
      payload: input,
    });
  };

  const searchProblemOptions = (text) => {
    setLoading();
    let payload = {
      problemOptions: drinkDrivingProblems,
      problemOptionSubtitle: 'Based on your search',
      problemOptionTitle: 'Please select your legal problem',
    };
    dispatch({
      type: SEARCH_PROBLEM_OPTIONS,
      payload,
    });
  };

  const clearResults = () => {
    dispatch({
      type: CLEAR_RESULTS,
    });
  };

  const cardActivation = (optionId) => {
    const optionIndex = state.problemOptions.findIndex((option) => {
      return option.id === optionId;
    });
    const active = state.problemOptions[optionIndex].active;
    const selectedOption = { ...state.problemOptions[optionIndex] };
    selectedOption.active = !active;
    const clonedOptions = [...state.problemOptions];
    const newOptions = clonedOptions.map((cloned) => {
      cloned.active = false;
      return cloned;
    });
    newOptions[optionIndex] = selectedOption;
    let step = state.step;
    if (selectedOption.active) step = step + 1;
    dispatch({
      type: CARD_ACTIVATION,
      payload: { problemOptions: newOptions, selectedOption, step },
    });
  };

  return (
    <TriageContext.Provider
      value={{
        problemOptionSubtitle: state.problemOptionSubtitle,
        problemOptionTitle: state.problemOptionTitle,
        loading: state.loading,
        problemOptions: state.problemOptions,
        search: state.search,
        selectedOption: state.selectedOption,
        step: state.step,
        back,
        cardActivation,
        clearResults,
        next,
        searchBarChange,
        searchProblemOptions,
        setLoading,
      }}
    >
      {props.children}
    </TriageContext.Provider>
  );
};

export default TriageState;
