import React from 'react';
import Cards from '../../Legalbot/Cards/Cards';

const FirstStep = ({ nextStep, options, cardActivationHandler }) => {
  const next = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <div>
      <Cards
        optionsTopProblems={options}
        cardActivation={cardActivationHandler}
      />
      <button onClick={next}>Next</button>
    </div>
  );
};

export default FirstStep;
