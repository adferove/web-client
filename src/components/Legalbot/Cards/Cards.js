import React from 'react';
import classes from './Cards.module.css';
import ItemCard from './ItemCard/ItemCard';

const Cards = () => (
  <div className={classes.Cards}>
    <ItemCard title="Grants of Legal Aid" />
    <ItemCard title="Grants of Legal Aid" />
    <ItemCard title="Grants of Legal Aid" />
    <ItemCard title="Grants of Legal Aid" />
    <ItemCard title="Grants of Legal Aid" />
  </div>
);

export default Cards;
