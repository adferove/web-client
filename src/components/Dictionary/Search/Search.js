import React, { useState } from 'react';

const Search = ({
  handledNotification,
  handledSearch,
  handledClear,
  showClear,
}) => {
  const [text, setText] = useState('');

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  const searchDefinition = (e) => {
    e.preventDefault();
    if (text === '') {
      handledNotification('Please enter at least 2 letters', 'danger');
    } else {
      handledSearch(text);
    }
  };

  const clearResults = () => {
    handledClear();
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
      {showClear && (
        <button className="btn btn-block btn-grey" onClick={clearResults}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
