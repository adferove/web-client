import React, { Fragment } from 'react';
import Section from '../../common/Section/Section';
import Search from './Search/Search';

const YourProblem = ({ searchProblem, onSearchChange, search }) => {
  return (
    <Fragment>
      <Section preTitle="Using your own words" title="Describe your problem">
        <Search
          search={search}
          onSearchChange={onSearchChange}
          searchProblem={searchProblem}
        />
      </Section>
      <Section
        preTitle="Not sure what you’re looking for?"
        title="Select from these common problems"
        grey
      ></Section>
    </Fragment>
  );
};

export default YourProblem;
