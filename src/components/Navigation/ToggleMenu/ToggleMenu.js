import React from 'react';
import classes from './ToggleMenu.module.css';

const ToggleMenu = ({ toggledMenu }) => (
  <div className={classes.ToggleMenu} onClick={toggledMenu}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default ToggleMenu;
