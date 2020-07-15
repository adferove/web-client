import React, { useContext } from 'react';
import NotificationContext from '../../context/notification/notificationContext';

const Notification = () => {
  const notificationContext = useContext(NotificationContext);
  const { notification } = notificationContext;

  if (notification !== null) {
    const notificationStyle = ['gel-notify', notification.style].join(' ');
    return (
      <div className="dic-la">
        <div className="dic-la-wrapper">
          <div className="dic-la-w-l1">
            <div className="dic-la-w-l11">
              <div className={notificationStyle}>{notification.msg}</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Notification;
