import React, { Fragment, useContext } from 'react';
import TriageContext from '../../../context/triage/triageContext';
import Section from '../../common/Section/Section';
import CheckBox from '../../common/CheckBox/CheckBox';

const AboutYou = () => {
  const triageContext = useContext(TriageContext);
  const { selectedOption, checkAboutYou } = triageContext;

  let styleStep2 = [
    'land-la-problem-img',
    'land-la-problem-img__' + selectedOption.imageAboutYou,
  ].join(' ');

  return (
    <Fragment>
      <Section
        preTitle="About you"
        title={selectedOption.aboutYouStep2Title}
        noBottom
      >
        <div className={styleStep2} />
      </Section>
      <Section grey>
        {selectedOption.aboutYouChecks.map((item) => (
          <CheckBox
            id={item.id}
            name={item.name}
            desc={item.desc}
            chk={item.checked}
            key={item.id}
            clicked={() => checkAboutYou(item.id)}
          />
        ))}
      </Section>
    </Fragment>
  );
};

export default AboutYou;
