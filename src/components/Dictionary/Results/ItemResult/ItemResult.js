import React from 'react';

const itemResult = ({ word, definition }) => {
  return (
    <div className="nsw-card ">
      <div className="nsw-card__content">
        <h2 className="nsw-card__title">{word}</h2>

        <div
          className="nsw-card__copy"
          dangerouslySetInnerHTML={{ __html: definition }}
        ></div>
      </div>
    </div>
  );
};

export default itemResult;
