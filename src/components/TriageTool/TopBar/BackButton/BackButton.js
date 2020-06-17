import React from 'react';
import classes from './BackButton.module.css';

const BackButton = ({ back }) => {
  return (
    <div className={classes.BackButton}>
      <button onClick={back}>BACK</button>
    </div>
  );
};

export default BackButton;
