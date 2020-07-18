import React from 'react';

const BasicSection = ({ title, paragraph1, paragraph2 }) => {
  return (
    <div className="land-la">
      <div className="land-la-wrapper">
        <div className="land-la-w-l1">
          <div className="land-la-w-l11">
            <h1 className="land-la-w-l11-h1">{title}</h1>
            <div className="land-la-w-l112">
              {paragraph1}
              {paragraph2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicSection;
