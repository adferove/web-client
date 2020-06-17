import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import InputIntend from '../InputIntend/InputIntend';
import Cards from '../Cards/Cards';
import Title from '../Title/Title';

const FirstStep = ({ options, cardActivationHandler }) => {
  return (
    <Auxiliary>
      <InputIntend />
      <Title>Top Legal optionsTopProblems</Title>
      <Cards
        optionsTopProblems={options}
        cardActivation={cardActivationHandler}
      />
    </Auxiliary>
  );
};

export default FirstStep;
