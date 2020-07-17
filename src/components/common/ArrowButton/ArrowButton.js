import React, { Fragment } from 'react';

const ArrowButton = ({ clickAction, iconName, label, arrowRight }) => {
  let position = (
    <div className="land-la-w-l11 land-la-w-l11__row" onClick={clickAction}>
      <i id="btn-quick-exit" className="material-icons">
        {iconName}
      </i>
      <b>{label}</b>
    </div>
  );
  if (arrowRight) {
    position = (
      <div
        className="land-la-w-l11 land-la-w-l11__row land-la-w-l11__right"
        onClick={clickAction}
      >
        <b>{label}</b>
        <i id="btn-quick-exit" className="material-icons">
          {iconName}
        </i>
      </div>
    );
  }

  return <Fragment>{position}</Fragment>;
};

export default ArrowButton;
