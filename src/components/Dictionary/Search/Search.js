import React, { useState, useContext } from 'react';
import DictionaryContext from '../../../context/dictionary/dictionaryContext';
import NotificationContext from '../../../context/notification/notificationContext';

const Search = () => {
  const dictionaryContext = useContext(DictionaryContext);
  const notificationContext = useContext(NotificationContext);
  const { searchHandler, clearHandler, legalDefinitions } = dictionaryContext;
  const { notificationHandler } = notificationContext;
  const [text, setText] = useState('');

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  const searchDefinition = (e) => {
    e.preventDefault();
    if (text === '') {
      notificationHandler('Please enter at least 2 letters', 'danger');
    } else {
      searchHandler(text);
    }
  };

  const clearResults = () => {
    clearHandler();
  };

  return (
    <div>
      <form className="form" onSubmit={searchDefinition}>
        <input
          type="text"
          name="text"
          placeholder="Enter a word"
          value={text}
          onChange={onTextChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-block btn-blue"
        />
      </form>
      {legalDefinitions !== null && legalDefinitions.length > 0 && (
        <button className="btn btn-block btn-grey" onClick={clearResults}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
