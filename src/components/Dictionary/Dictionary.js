import React from 'react';
import classes from './Dictionary.module.css';
import Search from './Search/Search';

const dictionary = () => {
  return (
    <div className={classes.Dictionary}>
      <Search />
    </div>
  );
};

export default dictionary;
