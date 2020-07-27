import React from 'react';
import ServiceElements from './ServiceElements/ServiceElements';

const LAService = (props) => {
  return (
    <div>
      <b>Legal Aid NSW state-wide services</b>
      <div className="grid-3">
        <ServiceElements />
      </div>
    </div>
  );
};

export default LAService;
