import React, { useState } from 'react';
import classes from './Dictionary.module.css';
import Search from './Search/Search';
import Results from './Results/Results';
import Notification from '../UI/Notification/Notification';
import axios from 'axios';
//import dictionaryResults from '../../legalDictionary.json';

const Dictionary = () => {
  const [notification, setNotification] = useState(null);
  const [legalDictionary, setLegalDictionary] = useState([]);
  const [loading, setLoading] = useState(false);

  const notificationHandler = (msg, style) => {
    setNotification({
      msg,
      style,
    });
    setTimeout(() => setNotification(null), 3000);
  };

  const searchHandler = async (text) => {
    setLoading(true);
    const res = await axios.get(`https://0af64983.ngrok.io/${text}`);
    setLegalDictionary(res.data.dictionary);
    //setLegalDictionary(dictionaryResults);
    setLoading(false);
  };

  const clearHandler = () => {
    setLegalDictionary([]);
  };

  return (
    <div className={classes.Dictionary}>
      <Notification notification={notification} />
      <Search
        handledNotification={notificationHandler}
        handledSearch={searchHandler}
        handledClear={clearHandler}
        showClear={legalDictionary !== null && legalDictionary.length > 0}
      />

      <Results loading={loading} results={legalDictionary} />
    </div>
  );
};

export default Dictionary;
