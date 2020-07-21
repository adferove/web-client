import React, { Fragment, useContext } from 'react';
import TriageContext from '../../../context/triage/triageContext';
import Section from '../../common/Section/Section';

const YourGuide = () => {
  const triageContext = useContext(TriageContext);
  const { selectedOption } = triageContext;

  let style = [
    'land-la-problem-img',
    'land-la-problem-img__' + selectedOption.imageYourGuide,
  ].join(' ');

  return (
    <Fragment>
      <Section
        preTitle={`Legal problem: ${selectedOption.title}`}
        title="Your legal guide"
      >
        <div className={style} />
      </Section>
    </Fragment>
  );
};

export default YourGuide;
