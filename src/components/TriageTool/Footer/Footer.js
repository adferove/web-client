import React from 'react';
import classes from './Footer.module.css';
import NextButton from './NextButton/NextButton';

const Footer = ({ next }) => (
  <div className={classes.Footer}>
    <NextButton goNext={next} />
  </div>
);

export default Footer;
