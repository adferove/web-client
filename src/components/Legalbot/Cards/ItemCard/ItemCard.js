import React from 'react';
import classes from './ItemCard.module.css';

const ItemCard = ({ title, active, clicked }) => {
  let cardStyle = [classes.ItemCard];
  if (active) {
    cardStyle = [classes.ItemCard, classes.active].join(' ');
  }
  return (
    <div onClick={clicked} className={cardStyle}>
      {title}
    </div>
  );
};

export default ItemCard;
