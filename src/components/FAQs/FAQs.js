import React from 'react';
import classes from './FAQs.module.css';
import Search from './Search/Search';
import Notification from '../UI/Notification/Notification';
import FAQsState from '../../context/faqs/FAQsState';

const FAQs = () => {
  return (
    <div className={classes.FAQs}>
      <FAQsState>
        <Notification />
        <div className="txt-dict">FAQs</div>
        <Search />
      </FAQsState>
    </div>
  );
};

export default FAQs;
