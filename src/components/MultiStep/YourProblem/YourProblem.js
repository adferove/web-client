import React, { Fragment, useContext } from 'react';
import Notification from '../../../UI/Notification/Notification';
import Loading from '../../../UI/Loading/Loading';
import Section from '../../common/Section/Section';
import Search from './Search/Search';
import NoMatches from './NoMatches/NoMatches';
import Cards from '../Cards/Cards';
import TriageContext from '../../../context/triage/triageContext';

const YourProblem = () => {
  const triageContext = useContext(TriageContext);
  const {
    problemOptionSubtitle,
    problemOptionTitle,
    loading,
    noMatches,
  } = triageContext;
  console.log(noMatches);
  return (
    <Fragment>
      <Notification />
      <Section preTitle="Using your own words" title="Describe your problem">
        <Search />
        {loading && <Loading />}
      </Section>
      {noMatches && (
        <Fragment>
          <Section title="Nothing here matches your search" grey>
            <NoMatches />
          </Section>
          <Section></Section>
        </Fragment>
      )}
      <Section preTitle={problemOptionSubtitle} title={problemOptionTitle} grey>
        <Cards />
      </Section>
    </Fragment>
  );
};

export default YourProblem;
