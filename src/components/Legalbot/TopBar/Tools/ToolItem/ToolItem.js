import React from 'react';
import classes from './ToolItem.module.css';

const ToolItem = ({ img, alt }) => (
  <div className={classes.ToolItem}>
    <img src={img} alt={alt} />
  </div>
);

export default ToolItem;
