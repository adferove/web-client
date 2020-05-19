import React, { useContext } from 'react';
import NotificationContext from '../../../context/notification/notificationContext';

const Notification = () => {
  const notificationContext = useContext(NotificationContext);
  const { notification } = notificationContext;
  return (
    notification !== null && (
      <div className={`alert alert-${notification.style}`}>
        {notification.msg}
      </div>
    )
  );
};

export default Notification;
