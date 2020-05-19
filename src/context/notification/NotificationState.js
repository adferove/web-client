import React, { useReducer } from 'react';
import NotificationContext from './notificationContext';
import NotificationReducer from './notificationReducer';
import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from '../types';

const NotificationState = (props) => {
  const initialState = {
    notification: null,
  };
  const [state, dispatch] = useReducer(NotificationReducer, initialState);

  const notificationHandler = (msg, style) => {
    setNotification(msg, style);
    setTimeout(() => removeNotification(), 3000);
  };

  const setNotification = (msg, style) => {
    dispatch({
      type: SET_NOTIFICATION,
      payload: {
        msg,
        style,
      },
    });
  };

  const removeNotification = () => {
    dispatch({
      type: REMOVE_NOTIFICATION,
    });
  };

  return (
    <NotificationContext.Provider
      value={{
        notification: state.notification,
        notificationHandler,
      }}
    >
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationState;
