import React from 'react';
import classes from './Dictionary.module.css';
import Search from './Search/Search';
import Results from './Results/Results';
import Notification from '../UI/Notification/Notification';
import DictionaryState from '../../context/dictionary/DictionaryState';

const Dictionary = () => {
  return (
    <div className={classes.Dictionary}>
      <DictionaryState>
        <Notification />
        <Search />
        <Results />
      </DictionaryState>
    </div>
  );
};

export default Dictionary;
