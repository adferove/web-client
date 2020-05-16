import React from 'react';

const search = () => {
  return (
    <div>
      <form className="form">
        <input type="text" name="text" placeholder="Enter a word" />
        <input
          type="submit"
          value="Search"
          className="btn btn-block btn-grey"
        />
      </form>
      <button className="btn btn-block btn-light">Clear</button>
    </div>
  );
};

export default search;
