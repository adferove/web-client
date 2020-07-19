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
} from '../types';

const TriageState = (props) => {
  const initialState = {
    step: 1,
    problemOptions: topLegalProblems,
    selectedOption: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(TriageReducer, initialState);

  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  const next = () => {
    let payload = state.step + 1;
    dispatch({
      type: NEXT_STEP,
      payload,
    });
  };

  const back = () => {
    let payload = state.step - 1;
    dispatch({
      type: BACK_STEP,
      payload,
    });
  };

  const searchProblemOptions = (text) => {
    setLoading();
    let payload = drinkDrivingProblems;
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
        problemOptions: state.problemOptions,
        loading: state.loading,
        searchProblemOptions,
        clearResults,
        setLoading,
        cardActivation,
        selectedOption: state.selectedOption,
        step: state.step,
        next,
        back,
      }}
    >
      {props.children}
    </TriageContext.Provider>
  );
};

export default TriageState;
