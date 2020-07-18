import React, { Fragment } from 'react';
import Section from '../../common/Section/Section';
import Search from './Search/Search';
import Cards from '../Cards/Cards';

const YourProblem = ({
  searchProblem,
  onSearchChange,
  search,
  options,
  cardActivationHandler,
}) => {
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
      >
        <Cards options={options} cardActivation={cardActivationHandler} />
      </Section>
    </Fragment>
  );
};

export default YourProblem;
