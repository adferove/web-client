import React from 'react';
import classes from './Logo.module.css';
import legalAidLogo from '../../assets/images/logo/la-logo.png';

const Logo = () => (
  <div className={classes.Logo}>
    <img src={legalAidLogo} alt="Legal Aid" />
  </div>
);

export default Logo;
