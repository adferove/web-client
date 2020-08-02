import React, { useReducer } from 'react';
import TriageContext from './triageContext';
import TriageReducer from './triageReducer';
//import Api from '../../common/api';
import topLegalProblems from '../../common/topLegalProblems.json';

import {
  SEARCH_PROBLEM_OPTIONS,
  SET_LOADING,
  CLEAR_RESULTS,
  CARD_ACTIVATION,
  NEXT_STEP,
  BACK_STEP,
  SEARCH_BAR,
  UPDATE_SELECTED_OPTION,
  BACK_QUESTION,
  NEXT_QUESTION,
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
    let payload = state.step + 1;
    dispatch({
      type: NEXT_STEP,
      payload,
    });
  };

  const beforeNext = () => {
    next();
  };

  const updateSelectedOption = (selectedOption) => {
    dispatch({
      type: UPDATE_SELECTED_OPTION,
      payload: selectedOption,
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
    const currentOptions = [...state.problemOptions];
    let problems = currentOptions.map((problem) => {
      if (problem.parent === '13') problem.step = 2;
      problem.active = false;
      return problem;
    });
    let step = state.step + 1;
    let payload = {
      problemOptions: problems,
      problemOptionSubtitle: 'Based on your search',
      problemOptionTitle: 'Please select your legal problem',
      step,
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
      if (
        selectedOption.problemQuestions &&
        selectedOption.problemQuestions.length > 0
      ) {
        selectedOption.questionStep = 1;
        //Initialize all question options to false
        selectedOption.problemQuestions.map((pq) => {
          return pq.options.map((opt) => (opt.checked = false));
        });
      }
      step += 1;
      newOptions.filter((opt) => {
        if (opt.parent === selectedOption.id) {
          opt.step = step;
        } else {
          if (opt.step === step) {
            opt.step = null;
          }
        }
        return opt;
      });
    }

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

  const checkQuestion = (itemId) => {
    const currentSelectedOption = state.selectedOption;
    const selectedOption = { ...currentSelectedOption };
    let questionIndex = currentSelectedOption.problemQuestions.findIndex(
      (el) => el.step === currentSelectedOption.questionStep
    );
    const question = currentSelectedOption.problemQuestions[questionIndex];
    const checkItemIndex = question.options.findIndex((item) => {
      return item.id === itemId;
    });
    const checked = question.options[checkItemIndex].checked;

    const newQuestion = { ...question };
    const checkItem = newQuestion.options[checkItemIndex];
    checkItem.checked = !checked;
    if (checkItem.checked) {
      newQuestion.options.map((option, index) => {
        if (index !== checkItemIndex && option.checked) option.checked = false;
        return option;
      });
    } else newQuestion.options[checkItemIndex] = checkItem;

    selectedOption.problemQuestions[questionIndex] = newQuestion;
    updateSelectedOption(selectedOption);
  };

  const backQuestion = () => {
    const currentSelectedOption = state.selectedOption;
    const selectedOption = { ...currentSelectedOption };
    if (
      currentSelectedOption.questionStep > 1 &&
      currentSelectedOption.questionStep <=
        currentSelectedOption.problemQuestions.length
    ) {
      selectedOption.questionStep = currentSelectedOption.questionStep - 1;
    } else {
      back();
    }
    dispatch({
      type: BACK_QUESTION,
      payload: selectedOption,
    });
  };

  const nextQuestion = () => {
    const currentSelectedOption = state.selectedOption;
    const selectedOption = { ...currentSelectedOption };
    if (
      currentSelectedOption.questionStep <
      currentSelectedOption.problemQuestions.length
    ) {
      selectedOption.questionStep = currentSelectedOption.questionStep + 1;
    } else {
      beforeNext();
    }
    dispatch({
      type: NEXT_QUESTION,
      payload: selectedOption,
    });
  };

  return (
    <TriageContext.Provider
      value={{
        loading: state.loading,
        problemOptions: state.problemOptions,
        problemOptionSubtitle: state.problemOptionSubtitle,
        problemOptionTitle: state.problemOptionTitle,
        search: state.search,
        selectedOption: state.selectedOption,
        step: state.step,
        back,
        backQuestion,
        beforeNext,
        cardActivation,
        checkAboutYou,
        checkQuestion,
        clearResults,
        next,
        nextQuestion,
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
