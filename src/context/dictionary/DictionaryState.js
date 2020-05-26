import React, { useReducer } from 'react';
import DictionaryContext from './dictionaryContext';
import DictionaryReducer from './dictionaryReducer';
import dictionaryResults from '../../legalDictionary.json';
import Api from '../../common/api';
import { SEARCH_LEGAL_DEFINITION, CLEAR_RESULTS, SET_LOADING } from '../types';

const DictionaryState = (props) => {
  const initialState = {
    legalDefinitions: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(DictionaryReducer, initialState);

  const searchHandler = async (text) => {
    setLoading();
    const res = await Api.getDefinitionsByText('dic', text);
    let payload;
    if (res) payload = res.dictionary;
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
    <DictionaryContext.Provider
      value={{
        legalDefinitions: state.legalDefinitions,
        loading: state.loading,
        searchHandler,
        clearHandler,
        setLoading,
      }}
    >
      {props.children}
    </DictionaryContext.Provider>
  );
};

export default DictionaryState;
