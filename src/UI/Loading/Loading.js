import React, { Fragment } from 'react';
import spinner from '../../assets/images/spinner.svg';
import classes from './Loading.module.css';

const Loading = () => (
  <Fragment>
    <img src={spinner} alt="Loading..." className={classes.Loading} />
  </Fragment>
);

export default Loading;
