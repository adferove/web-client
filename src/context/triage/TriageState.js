import React, { useReducer } from 'react';
import TriageContext from './triageContext';
import TriageReducer from './triageReducer';
import Api from '../../common/api';
import LegalProblems from '../../common/data/legalProblems.json';

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

import { DRINK_DRIVING } from './problems';

const TriageState = (props) => {
  const legalProblems = () => {
    const results = [...LegalProblems];
    return results.filter((item) => {
      if (item.parent === undefined) {
        item.step = 1;
      }
      return item;
    });
  };

  const initialState = {
    noMatches: false,
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
    const step = state.step;
    let payload = step + 1;
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

  const updateNoMatches = (noMatches) => {
    dispatch({
      type: NO_MATCHES,
      payload: noMatches,
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

  const searchProblemOptions = async (text) => {
    const currentOptions = [...state.problemOptions];
    setLoading();
    const res = await Api.getDefinitionsByText('matter', text);
    if (res && res.dictionary && res.dictionary.length) {
      const searchResults = res.dictionary;
      let problems = currentOptions.map((problem) => {
        problem.active = false;
        let match = searchResults.filter((item) => item.key === problem.key);
        if (match.length > 0) {
          problem.step = 2;
        } else if (problem.step === 2) problem.step = null;
        return problem;
      });
      let step = state.step + 1;
      let payload = {
        problemOptions: problems,
        step,
        noMatches: false,
      };
      dispatch({
        type: SEARCH_PROBLEM_OPTIONS,
        payload,
      });
    } else {
      updateNoMatches(true);
    }
  };

  const clearResults = () => {
    dispatch({
      type: CLEAR_RESULTS,
    });
  };

  const cardActivation = (optionId) => {
    const currentStep = state.step;
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
      beforeNext();
      let step = currentStep + 1;
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
    updateSelectedOption(selectedOption);
    updateNoMatches(false);
    dispatch({
      type: CARD_ACTIVATION,
      payload: newOptions,
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
    updateSelectedOption(selectedOption);
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
      if (selectedOption.key === DRINK_DRIVING) {
        const factsLength = selectedOption.legalGuideFacts.length;
        let pos = factsLength;
        const yourLegalFacts = selectedOption.problemQuestions
          .map((question) => {
            const answer = question.options.find(
              (option) => option.checked && option.showResult
            );
            if (answer) {
              pos += 1;
              return {
                pos,
                icon: question.icon,
                desc: answer.resultLabel,
                show: true,
              };
            } else return null;
          })
          .filter((item) => item);
        const fixedFacts = selectedOption.legalGuideFacts.filter(
          (item) => item.firm
        );
        fixedFacts.push(...yourLegalFacts);
        selectedOption.legalGuideFacts = fixedFacts;
      }
      beforeNext();
    }
    updateSelectedOption(selectedOption);
  };

  return (
    <TriageContext.Provider
      value={{
        loading: state.loading,
        noMatches: state.noMatches,
        problemOptions: state.problemOptions,

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
