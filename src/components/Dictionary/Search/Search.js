import React, { useState, useContext } from 'react';
import DictionaryContext from '../../../context/dictionary/dictionaryContext';
import NotificationContext from '../../../context/notification/notificationContext';
import Results from '../Results/Results';

const Search = () => {
  const dictionaryContext = useContext(DictionaryContext);
  const notificationContext = useContext(NotificationContext);
  const {
    searchHandler,
    clearHandler,
    legalDefinitions,
    loading,
  } = dictionaryContext;
  const { notificationHandler } = notificationContext;
  const [text, setText] = useState('');

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  const searchDefinition = (e) => {
    e.preventDefault();
    if (text === '') {
      notificationHandler('Please enter at least 2 letters', 'error');
    } else {
      searchHandler(text);
    }
  };

  const clearResults = () => {
    clearHandler();
  };

  return (
    <div className="dic-la-w-l11">
      <form className="dic-la-w-l111" onSubmit={searchDefinition}>
        <input
          className="nsw-form-input"
          type="search"
          name="text"
          placeholder="Search..."
          value={text}
          onChange={onTextChange}
        />

        <div>
          <input
            type="submit"
            value="Search"
            className="triage-button triage-button--highlight"
          />
        </div>
        {legalDefinitions !== null && legalDefinitions.length > 0 && (
          <div>
            <button
              className="triage-button triage-button--triage"
              onClick={clearResults}
            >
              Clear
            </button>
          </div>
        )}
      </form>

      <Results loading={loading} legalDefinitions={legalDefinitions} />
    </div>
  );
};

export default Search;
