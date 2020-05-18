import React from 'react';

const Notification = ({ notification }) => {
  return (
    notification !== null && (
      <div className={`alert alert-${notification.style}`}>
        {notification.msg}
      </div>
    )
  );
};

export default Notification;
