import React from 'react';
import classes from './Dictionary.module.css';
import Search from './Search/Search';
import Notification from '../UI/Notification/Notification';
import DictionaryState from '../../context/dictionary/DictionaryState';

const Dictionary = () => {
  return (
    <div className={classes.Dictionary}>
      <DictionaryState>
        <Notification />
        <div className="txt-dict">Dictionary</div>
        <Search />
      </DictionaryState>
    </div>
  );
};

export default Dictionary;
