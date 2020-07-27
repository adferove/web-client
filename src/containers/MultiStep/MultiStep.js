import React, { Fragment, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Breadcrumb from '../../components/MultiStep/Breadcrumb/Breadcrumb';
import YourProblem from '../../components/MultiStep/YourProblem/YourProblem';
import AboutYou from '../../components/MultiStep/AboutYou/AboutYou';
import YourGuide from '../../components/MultiStep/YourGuide/YourGuide';
import Footer from '../../components/MultiStep/Footer/Footer';
import TriageContext from '../../context/triage/triageContext';

const MultiStep = () => {
  let history = useHistory();
  const triageContext = useContext(TriageContext);
  const { step, next, back } = triageContext;

  const nextStep = (e) => {
    e.preventDefault();
    scrollToTop();
    next();
  };

  const prevStep = (e) => {
    e.preventDefault();
    back();
    if (step === 1) {
      history.goBack();
    }
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  let currentForm = null;

  switch (step) {
    case 1:
      currentForm = (
        <Fragment>
          <YourProblem />
          <Footer back={prevStep} />
        </Fragment>
      );
      break;
    case 2:
      currentForm = (
        <Fragment>
          <AboutYou />
          <Footer back={prevStep} next={nextStep} />
        </Fragment>
      );
      break;
    case 3:
      currentForm = (
        <Fragment>
          <YourGuide />
          <Footer back={prevStep} />
        </Fragment>
      );
      break;
    default:
      break;
  }
  return (
    <Fragment>
      <Breadcrumb step={step} />
      {currentForm}
    </Fragment>
  );
};

export default MultiStep;
