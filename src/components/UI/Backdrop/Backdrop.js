import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props) => (props.showBackdrop ? <div className={classes.Backdrop} onClick={props.hideBackdrop}></div> : null);

export default backdrop;