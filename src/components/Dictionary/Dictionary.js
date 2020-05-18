import React, { useState } from 'react';
import classes from './Dictionary.module.css';
import Search from './Search/Search';
import Results from './Results/Results';
import Notification from '../UI/Notification/Notification';

const Dictionary = () => {
  const [notification, setNotification] = useState(null);

  const notificationHandler = (msg, style) => {
    setNotification({
      msg,
      style,
    });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className={classes.Dictionary}>
      <Notification notification={notification} />
      <Search handledNotification={notificationHandler} />
      <Results />
    </div>
  );
};

export default Dictionary;
