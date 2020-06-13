import React from 'react';

const SecondStep = ({ nextStep, prevStep }) => {
  return (
    <div>
      <p>SecondStep</p>
      <button onClick={nextStep}>Next</button>
      <button onClick={prevStep}>Back</button>
    </div>
  );
};

export default SecondStep;
