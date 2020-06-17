import React from 'react';
import classes from './TopBar.module.css';
import BackButton from './BackButton/BackButton';
import Tools from './Tools/Tools';

const TopBar = ({ back }) => (
  <div className={classes.TopBar}>
    <BackButton back={back} />
    <Tools />
  </div>
);

export default TopBar;
