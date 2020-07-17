import React from 'react';

const Search = ({ searchProblem, onSearchChange, search }) => {
  return (
    <div className="dic-la-w-l11">
      <form className="dic-la-w-l111" onSubmit={searchProblem}>
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
