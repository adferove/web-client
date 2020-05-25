import React, { useState, useContext } from 'react';
import FAQsContext from '../../../context/faqs/faqsContext';
import NotificationContext from '../../../context/notification/notificationContext';
import Results from '../Results/Results';

const Search = () => {
  const faqsContext = useContext(FAQsContext);
  const notificationContext = useContext(NotificationContext);
  const {
    searchHandler,
    clearHandler,
    legalDefinitions,
    loading,
  } = faqsContext;
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
      <form onSubmit={searchDefinition}>
        <input
          className="form-text"
          type="search"
          name="text"
          placeholder="Search..."
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
      <Results loading={loading} legalDefinitions={legalDefinitions} />
    </div>
  );
};

export default Search;
