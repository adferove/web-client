import React, { useContext } from 'react';
import NotificationContext from '../../../../context/notification/notificationContext';
import TriageContext from '../../../../context/triage/triageContext';

const Search = () => {
  const notificationContext = useContext(NotificationContext);
  const triageContext = useContext(TriageContext);
  const { notificationHandler } = notificationContext;
  const { search, searchBarChange, searchProblemOptions } = triageContext;
  const onSearchChange = (e) => {
    searchBarChange(e.target.value);
    console.log(e.target.value);
  };
  const onSubmitSearch = (e) => {
    e.preventDefault();
    if (search === '') {
      notificationHandler('Please enter key words', 'error');
    } else {
      searchProblemOptions();
    }
  };

  return (
    <div className="dic-la-w-l11">
      <form className="dic-la-w-l111" onSubmit={onSubmitSearch}>
        <input
          className="nsw-form-input"
          type="search"
          name="search"
          placeholder="Sentences or keywords"
          value={search}
          onChange={onSearchChange}
        />
        <div>
          <input
            type="submit"
            value="Find help"
            className="triage-button triage-button--highlight"
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
