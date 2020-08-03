import React, { Fragment } from 'react';
import Section from '../../../common/Section/Section';
import Cards from '../../Cards/Cards';

const SelectOneOption = () => {
  return (
    <Fragment>
      <Section
        preTitle="Please select one option"
        title="My legal problem is about"
      ></Section>
      <Section grey>
        <Cards />
      </Section>
    </Fragment>
  );
};

export default SelectOneOption;
