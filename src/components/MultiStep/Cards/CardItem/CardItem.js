import React from 'react';

const CardItem = ({ title, active, clicked }) => {
  let cardStyle = 'nsw-card__content nsw-card__cd';
  if (active) {
    cardStyle = ['nsw-card__content nsw-card__cd', 'nsw-card__active'].join(
      ' '
    );
  }
  return (
    <div className="nsw-card">
      <div onClick={clicked} className={cardStyle}>
        {title}
      </div>
    </div>
  );
};

export default CardItem;
