import React from 'react';
import { useHistory } from 'react-router';
import classes from './BackButton.module.css';

const BackButton = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <div className={classes.BackButton}>
      <button onClick={goBack}>BACK</button>
    </div>
  );
};

export default BackButton;
