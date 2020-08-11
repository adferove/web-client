import React, { Fragment } from 'react';

const WordDefinition = ({ word, definition, close }) => (
  <Fragment>
    <div className="dic-def">
      <div className="dic-def-close" onClick={close}>
        <i id="btn-quick-exit" className="material-icons">
          close
        </i>
      </div>
      <strong>{word}</strong>
      <div
        className="dic-def__no-bold"
        dangerouslySetInnerHTML={{ __html: definition }}
      ></div>
      <div>
        <div className="triage-button triage-button--outline" onClick={close}>
          Close
        </div>
      </div>
    </div>
  </Fragment>
);

export default WordDefinition;
