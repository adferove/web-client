import React, { Fragment, useContext } from 'react';
import TriageContext from '../../../../context/triage/triageContext';
import Section from '../../../common/Section/Section';
import Footer from '../../Footer/Footer';

const Question = () => {
  const triageContext = useContext(TriageContext);
  const { selectedOption, next, back } = triageContext;
  const nextStep = (e) => {
    e.preventDefault();
    next();
  };

  const prevStep = (e) => {
    e.preventDefault();
    back();
  };
  return (
    <Fragment>
      <Section preTitle="Question" title={selectedOption.title}></Section>
      <Footer back={prevStep} next={nextStep} />
    </Fragment>
  );
};

export default Question;
