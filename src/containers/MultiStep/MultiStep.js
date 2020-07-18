import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Breadcrumb from '../../components/MultiStep/Breadcrumb/Breadcrumb';
import YourProblem from '../../components/MultiStep/YourProblem/YourProblem';
import AboutYou from '../../components/MultiStep/AboutYou/AboutYou';
import YourGuide from '../../components/MultiStep/YourGuide/YourGuide';
import Footer from '../../components/MultiStep/Footer/Footer';
import topLegalProblems from '../../common/topLegalProblems.json';

const MultiStep = () => {
  let history = useHistory();
  const [step, setStep] = useState(1);
  const [search, setSearch] = useState('');
  const [options, setOptions] = useState(topLegalProblems);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const searchProblem = (e) => {
    e.preventDefault();
    if (search === '') {
    } else {
    }
  };
  const nextStep = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const prevStep = (e) => {
    e.preventDefault();
    setStep(step - 1);
    if (step === 1) {
      history.goBack();
    }
  };

  const cardActivationHandler = (optionId) => {
    const optionIndex = options.findIndex((option) => {
      return option.id === optionId;
    });
    const active = options[optionIndex].active;
    const selectedOption = { ...options[optionIndex] };
    selectedOption.active = !active;
    const clonedOptions = [...options];
    const newOptions = clonedOptions.map((cloned) => {
      cloned.active = false;
      return cloned;
    });
    newOptions[optionIndex] = selectedOption;
    setOptions(newOptions);
    if (selectedOption.active) setStep(step + 1);
  };

  let currentForm = null;

  switch (step) {
    case 1:
      currentForm = (
        <Fragment>
          <YourProblem
            search={search}
            onSearchChange={onSearchChange}
            searchProblem={searchProblem}
            options={options}
            cardActivationHandler={cardActivationHandler}
          />
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
