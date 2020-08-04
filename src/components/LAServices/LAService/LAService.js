import React from 'react';
import ServiceElements from './ServiceElements/ServiceElements';

const LAService = ({ title, services }) => {
  return (
    <div className="la-mar">
      <b>{title}</b>
      <div className="grid-3">
        <ServiceElements services={services} />
      </div>
    </div>
  );
};

export default LAService;
