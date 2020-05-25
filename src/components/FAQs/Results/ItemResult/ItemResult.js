import React from 'react';

const itemResult = ({ word, definition }) => {
  return (
    <div className="card">
      <b>{word}</b>
      <div dangerouslySetInnerHTML={{ __html: definition }} />
    </div>
  );
};

export default itemResult;
