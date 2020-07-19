import React from 'react';
import TriageState from '../../context/triage/TriageState';
import MultiStep from './MultiStep';

const MultiStepContainer = () => {
  return (
    <TriageState>
      <MultiStep />
    </TriageState>
  );
};

export default MultiStepContainer;
