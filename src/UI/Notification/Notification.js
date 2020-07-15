import React, { useContext } from 'react';
import NotificationContext from '../../context/notification/notificationContext';

const Notification = () => {
  const notificationContext = useContext(NotificationContext);
  const { notification } = notificationContext;
  return (
    notification !== null && (
      <div className="dic-la">
        <div className="dic-la-wrapper">
          <div className="dic-la-w-l1">
            <div className="dic-la-w-l11">
              <div className="gel-notify error">{notification.msg}</div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Notification;
