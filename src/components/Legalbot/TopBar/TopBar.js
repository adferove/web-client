import React from 'react';
import classes from './TopBar.module.css';
import BackButton from './BackButton/BackButton';
import Tools from './Tools/Tools';

const TopBar = () => (
  <div className={classes.TopBar}>
    <BackButton />
    <Tools />
  </div>
);

export default TopBar;
