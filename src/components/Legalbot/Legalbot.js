import React, { useState } from 'react';
import classes from './Legalbot.module.css';
import InputIntend from './InputIntend/InputIntend';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Footer from './Footer/Footer';
import Cards from './Cards/Cards';
import topLegalProblems from '../../common/topLegalProblems.json';

const Legalbot = () => {
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
  return (
    <Auxiliary>
      <div className={classes.Legalbot}>
        <div className={classes.Frame}>
          <InputIntend />
          <Cards
            optionsTopProblems={options}
            cardActivation={cardActivationHandler}
          />
          <Footer />
        </div>
      </div>
    </Auxiliary>
  );
};

export default Legalbot;
