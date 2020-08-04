import React, { Fragment } from 'react';
import ServiceElement from './ServiceElement/ServiceElement';

const ServiceElements = ({ services }) => {
  return (
    <Fragment>
      {services.map((item) => (
        <ServiceElement key={item.id} title={item.desc} />
      ))}
    </Fragment>
  );
};

export default ServiceElements;
