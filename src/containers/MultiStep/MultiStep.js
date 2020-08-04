import React, { Fragment, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Breadcrumb from '../../components/MultiStep/Breadcrumb/Breadcrumb';
import YourProblem from '../../components/MultiStep/YourProblem/YourProblem';
import AboutYou from '../../components/MultiStep/AboutYou/AboutYou';
import SelectOneOption from '../../components/MultiStep/YourProblem/SelectOneOption/SelectOneOption';
import SelectedProblem from '../../components/MultiStep/YourProblem/SelectedProblem/SelectedProblem';
import Question from '../../components/MultiStep/YourProblem/Question/Question';
import WorkInProgress from '../../components/MultiStep/YourProblem/WorkInProgress/WorkInProgress';

import YourGuide from '../../components/MultiStep/YourGuide/YourGuide';
import Footer from '../../components/MultiStep/Footer/Footer';
import TriageContext from '../../context/triage/triageContext';
import {
  YOUR_PROBLEM,
  SELECTED_PROBLEM,
  QUESTION,
  ABOUT_YOU,
  YOUR_LEGAL_GUIDE,
} from '../../context/triage/forms';

const MultiStep = () => {
  let history = useHistory();
  const triageContext = useContext(TriageContext);
  const {
    step,
    beforeNext,
    back,
    selectedOption,
    problemOptions,
  } = triageContext;

  const nextStep = (e) => {
    e.preventDefault();
    scrollToTop();
    beforeNext();
  };

  const prevStep = (e) => {
    e.preventDefault();
    if (step === 1) {
      history.goBack();
    } else back();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const wipForm = (
    <Fragment>
      <WorkInProgress />
      <Footer back={prevStep} />
    </Fragment>
  );

  const getForm = () => {
    if (selectedOption.journeySteps === undefined)
      return {
        currentForm: wipForm,
      };

    const activeStep = selectedOption.journeySteps.find(
      (journeyStep) => journeyStep.step === step
    );

    switch (activeStep.form) {
      case SELECTED_PROBLEM:
        return {
          currentForm: (
            <Fragment>
              <SelectedProblem />
              <Footer back={prevStep} next={nextStep} />
            </Fragment>
          ),
        };
      case QUESTION:
        return {
          currentForm: (
            <Fragment>
              <Question />
            </Fragment>
          ),
        };
      case ABOUT_YOU:
        return {
          currentForm: (
            <Fragment>
              <AboutYou />
            </Fragment>
          ),
          form: ABOUT_YOU,
        };
      case YOUR_LEGAL_GUIDE:
        return {
          currentForm: (
            <Fragment>
              <YourGuide />
              <Footer back={prevStep} />
            </Fragment>
          ),
          form: YOUR_LEGAL_GUIDE,
        };
      default:
        break;
    }
  };

  let currentForm = null;
  let form = YOUR_PROBLEM;
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
      const existStep2 = problemOptions.find((problem) => problem.step === 2);
      if (existStep2) {
        currentForm = (
          <Fragment>
            <SelectOneOption />
            <Footer back={prevStep} />
          </Fragment>
        );
      } else {
        currentForm = wipForm;
      }
      break;
    default:
      const selectedForm = getForm();
      form = selectedForm.form;
      currentForm = selectedForm.currentForm;
      break;
  }
  return (
    <Fragment>
      <Breadcrumb step={step} form={form} />
      {currentForm}
    </Fragment>
  );
};

export default MultiStep;
