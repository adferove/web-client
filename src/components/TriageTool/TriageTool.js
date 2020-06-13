import React, { useState } from 'react';
import classes from './TriageTool.module.css';
import FirsStep from './FirstStep/FirstStep';
import SecondStep from './SecondStep/SecondStep';
import Summary from './Summary/Summary';
import topLegalProblems from '../../common/topLegalProblems.json';

const TriageTool = () => {
  const [step, setStep] = useState(1);
  const [options, setOptions] = useState(topLegalProblems);
  const cardActivationHandler = (optionId) => {
    const optionIndex = options.findIndex((option) => {
      return option.id === optionId;
    });
    const active = options[optionIndex].active;
    const selectedOption = { ...options[optionIndex] };
    selectedOption.active = !active;
    const newOptions = [...options];
    newOptions[optionIndex] = selectedOption;
    setOptions(newOptions);
  };

  const nextStep = () => {
    console.log('Yellow');
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  let currentForm = null;

  switch (step) {
    case 1:
      currentForm = (
        <FirsStep
          nextStep={nextStep}
          options={options}
          cardActivationHandler={cardActivationHandler}
        />
      );
      break;
    case 2:
      currentForm = <SecondStep nextStep={nextStep} prevStep={prevStep} />;
      break;
    case 3:
      currentForm = <Summary prevStep={prevStep} />;
      break;
    default:
      break;
  }

  return <div className={classes.TriageTool}>{currentForm}</div>;
};

export default TriageTool;
