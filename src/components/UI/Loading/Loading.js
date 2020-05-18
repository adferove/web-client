import React from 'react';
import spinner from '../../../assets/images/spinner.gif';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import classes from './Loading.module.css';

const Loading = () => (
  <Auxiliary>
    <img src={spinner} alt="Loading..." className={classes.Loading} />
  </Auxiliary>
);

export default Loading;
