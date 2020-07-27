import React from 'react';

const ServiceElement = (props) => {
  return (
    <div className="nsw-card">
      <div className="nsw-card__content nsw-card__cd">{props.title}</div>
    </div>
  );
};

export default ServiceElement;
