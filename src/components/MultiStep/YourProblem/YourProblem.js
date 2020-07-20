import React, { Fragment } from 'react';
import Notification from '../../../UI/Notification/Notification';
import Section from '../../common/Section/Section';
import Search from './Search/Search';
import Cards from '../Cards/Cards';

const YourProblem = () => {
  return (
    <Fragment>
      <Notification />
      <Section preTitle="Using your own words" title="Describe your problem">
        <Search />
      </Section>
      <Section
        preTitle="Not sure what you’re looking for?"
        title="Select from these common problems"
        grey
      >
        <Cards />
      </Section>
    </Fragment>
  );
};

export default YourProblem;
