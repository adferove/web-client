import React from 'react';
import classes from './ItemCard.module.css';

const ItemCard = ({ title }) => <div className={classes.ItemCard}>{title}</div>;

export default ItemCard;
