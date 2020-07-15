import React from 'react';

const itemResult = ({ word, definition }) => {
  return (
    <div class="nsw-card ">
      <div class="nsw-card__content">
        <h2 class="nsw-card__title">{word}</h2>
        <p class="nsw-card__copy">
          <div dangerouslySetInnerHTML={{ __html: definition }}></div>
        </p>
      </div>
    </div>
  );
};

export default itemResult;
