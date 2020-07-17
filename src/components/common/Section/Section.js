import React from 'react';

const Section = (props) => {
  return (
    <div className="dic-la">
      <div className="dic-la-wrapper">
        <div className="dic-la-w-l1">
          <div className="dic-la-w-l11">
            <b>{props.preTitle}</b>
            <div className="dic-la-w-l11-h1">{props.title}</div>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Section;
