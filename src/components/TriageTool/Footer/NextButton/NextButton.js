import React from 'react';
import classes from './NextButton.module.css';

const NextButton = ({ goNext }) => (
  <button onClick={goNext} className={classes.NextButton}>
    NEXT
  </button>
);

export default NextButton;
