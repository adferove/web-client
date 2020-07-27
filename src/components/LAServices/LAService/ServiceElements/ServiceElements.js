import React, { Fragment } from 'react';
import ServiceElement from './ServiceElement/ServiceElement';

const ServiceElements = (props) => {
  return (
    <Fragment>
      <ServiceElement title="Child Support Service" />
      <ServiceElement title="Mental Health Advocacy Service" />
      <ServiceElement title="Mental Health Advocacy Service" />
    </Fragment>
  );
};

export default ServiceElements;
