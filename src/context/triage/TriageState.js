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
  const legalProblems = () => {
    const results = [...topLegalProblems];
    return results.filter((item) => {
      if (item.parent === undefined) {
        item.step = 1;
      }
      return item;
    });
  };

  const initialState = {
    problemOptionSubtitle: 'Not sure what you’re looking for?',
    problemOptionTitle: 'Select from these common problems',
    problemOptions: legalProblems(),
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
    const currentStep = state.step;
    let step = currentStep;
    const currentOptions = state.problemOptions;
    const optionIndex = currentOptions.findIndex((option) => {
      return option.id === optionId;
    });
    const active = currentOptions[optionIndex].active;
    const selectedOption = { ...currentOptions[optionIndex] };
    selectedOption.active = !active;
    const clonedOptions = [...currentOptions];
    const newOptions = clonedOptions.map((cloned) => {
      const newOption = { ...cloned };
      if (selectedOption.parent !== newOption.id) {
        newOption.active = false;
      }
      return newOption;
    });
    newOptions[optionIndex] = selectedOption;

    if (selectedOption.active) {
      step += 1;
      newOptions.filter((opt) => {
        if (opt.parent === selectedOption.id) {
          opt.step = step;
        }
        return opt;
      });
    }
    console.log(newOptions);
    dispatch({
      type: CARD_ACTIVATION,
      payload: { problemOptions: newOptions, selectedOption, step },
    });
  };

  const checkAboutYou = (itemId) => {
    const selectedOption = { ...state.selectedOption };
    const checkItemIndex = selectedOption.aboutYouChecks.findIndex((item) => {
      return item.id === itemId;
    });
    const checked = selectedOption.aboutYouChecks[checkItemIndex].checked;
    const checkItem = selectedOption.aboutYouChecks[checkItemIndex];
    checkItem.checked = !checked;
    selectedOption.aboutYouChecks[checkItemIndex] = checkItem;
    updateSelectedOption(selectedOption);
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
        checkAboutYou,
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
