import React from 'react';

const itemResult = ({ word, definition }) => {
  return (
    <div className="card">
      <b>{word}</b>
      <p>{definition}</p>
    </div>
  );
};

export default itemResult;
