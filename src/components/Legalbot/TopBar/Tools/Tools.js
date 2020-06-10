import React from 'react';
import classes from './Tools.module.css';
import ToolItem from './ToolItem/ToolItem';
import book from '../../../../assets/images/book.png';
import gear from '../../../../assets/images/gear.png';

const Tools = () => (
  <div className={classes.Tools}>
    <ToolItem img={book} alt="Dictionary" />
    <ToolItem img={gear} alt="Options" />
  </div>
);

export default Tools;
