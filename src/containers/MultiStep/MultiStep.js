import React, { Fragment, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Breadcrumb from '../../components/MultiStep/Breadcrumb/Breadcrumb';
import YourProblem from '../../components/MultiStep/YourProblem/YourProblem';
import AboutYou from '../../components/MultiStep/AboutYou/AboutYou';
import SelectOneOption from '../../components/MultiStep/YourProblem/SelectOneOption/SelectOneOption';
import SelectedProblem from '../../components/MultiStep/YourProblem/SelectedProblem/SelectedProblem';
import Question from '../../components/MultiStep/YourProblem/Question/Question';

import YourGuide from '../../components/MultiStep/YourGuide/YourGuide';
import Footer from '../../components/MultiStep/Footer/Footer';
import TriageContext from '../../context/triage/triageContext';

const MultiStep = () => {
  let history = useHistory();
  const triageContext = useContext(TriageContext);
  const { step, next, back, selectedOption } = triageContext;

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
          <SelectOneOption />
          <Footer back={prevStep} />
        </Fragment>
      );
      break;
    case 3:
      currentForm = (
        <Fragment>
          <SelectedProblem />
          <Footer back={prevStep} next={nextStep} />
        </Fragment>
      );
      break;
    case 4:
      currentForm = (
        <Fragment>
          <Question />
        </Fragment>
      );
      break;
    case 5:
      if (selectedOption.hasAboutYouStep) {
        currentForm = (
          <Fragment>
            <AboutYou />
            <Footer back={prevStep} next={nextStep} />
          </Fragment>
        );
      } else {
        currentForm = (
          <Fragment>
            <YourGuide />
            <Footer back={prevStep} />
          </Fragment>
        );
      }
      break;
    case 6:
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
