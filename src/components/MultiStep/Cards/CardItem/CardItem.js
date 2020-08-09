import React from 'react';

const CardItem = ({ title, active, clicked, image, disabled }) => {
  let cardStyle = 'nsw-card__content nsw-card__cd nsw-card__pathway';
  if (active) {
    cardStyle = ['nsw-card__content nsw-card__cd', 'nsw-card__active'].join(
      ' '
    );
  }
  if (disabled) {
    cardStyle = ['nsw-card__content nsw-card__cd', 'nsw-card__disabled'].join(
      ' '
    );
  }
  let imgStyle = '';
  if (image) {
    imgStyle = ['nsw-card__image', 'nsw-card__image__' + image].join(' ');
  }
  return (
    <div className="nsw-card">
      <div onClick={clicked} className={cardStyle}>
        {title}
        {image && <div className={imgStyle}></div>}
      </div>
    </div>
  );
};

export default CardItem;
