import React, { Fragment, useContext } from 'react';
import TriageContext from '../../../context/triage/triageContext';
import Section from '../../common/Section/Section';

const AboutYou = () => {
  const triageContext = useContext(TriageContext);
  const { selectedOption } = triageContext;
  let style = [
    'land-la-problem-img',
    'land-la-problem-img__' + selectedOption.image,
  ].join(' ');
  return (
    <Fragment>
      <Section preTitle="Your legal problem is" title={selectedOption.title}>
        <div className={style} />
        <div className="land-la-w-l11">
          <div className="land-la-w-l112-p">{selectedOption.desc}</div>
        </div>
      </Section>
    </Fragment>
  );
};

export default AboutYou;
