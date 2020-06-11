import React from 'react';
import classes from './Cards.module.css';
import ItemCard from './ItemCard/ItemCard';

const Cards = ({ optionsTopProblems, cardActivation }) => {
  return (
    <div className={classes.Cards}>
      {optionsTopProblems.map((option) => (
        <ItemCard
          clicked={() => cardActivation(option.id)}
          key={option.id}
          title={option.title}
          active={option.active}
        />
      ))}
    </div>
  );
};

export default Cards;
