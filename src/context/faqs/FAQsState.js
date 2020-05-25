import React, { useReducer } from 'react';
import FAQSContext from './faqsContext';
import FAQSReducer from './faqsReducer';
import dictionaryResults from '../../legalDictionary.json';
import Api from '../../common/api';
import { SEARCH_LEGAL_DEFINITION, CLEAR_RESULTS, SET_LOADING } from '../types';

const FAQsState = (props) => {
  const initialState = {
    legalDefinitions: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(FAQSReducer, initialState);

  const searchHandler = async (text) => {
    setLoading();
    const res = await Api.getDefinitionsByText('faq', text);
    let payload;
    if (res) payload = res.data.dictionary;
    else payload = dictionaryResults;
    dispatch({
      type: SEARCH_LEGAL_DEFINITION,
      payload,
    });
  };

  const clearHandler = () => {
    dispatch({
      type: CLEAR_RESULTS,
    });
  };

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <FAQSContext.Provider
      value={{
        legalDefinitions: state.legalDefinitions,
        loading: state.loading,
        searchHandler,
        clearHandler,
        setLoading,
      }}
    >
      {props.children}
    </FAQSContext.Provider>
  );
};

export default FAQsState;
