import React from 'react';

const Section = (props) => {
  let section = (
    <div className="dic-la-wrapper">
      <div className="dic-la-w-l1">
        <div className="dic-la-w-l11">
          <b>{props.preTitle}</b>
          <div className="dic-la-w-l11-h1">{props.title}</div>
        </div>
        {props.children}
      </div>
    </div>
  );
  if (props.grey) {
    section = (
      <div className="dic-la-wrapper dic-la-wrapper__grey">
        <div className="dic-la-w-l1">
          <div className="dic-la-w-l11">
            {props.preTitle}
            <div className="dic-la-w-l11-h1">{props.title}</div>
          </div>
          {props.children}
        </div>
      </div>
    );
  }
  return <div className="dic-la">{section}</div>;
};

export default Section;
