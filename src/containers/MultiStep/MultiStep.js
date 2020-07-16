import React, { Fragment } from 'react';
import Section from '../../components/common/Section/Section';
import Breadcrumb from '../../components/MultiStep/Breadcrumb/Breadcrumb';

const MultiStep = () => {
  return (
    <Fragment>
      <Breadcrumb />
      <Section
        preTitle="Using your own words"
        title="Describe your problem"
      ></Section>
    </Fragment>
  );
};

export default MultiStep;
