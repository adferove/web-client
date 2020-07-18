import React from 'react';
import CardItem from './CardItem/CardItem';

const Cards = ({ options, cardActivation }) => {
  return (
    <div className="dic-la-w-l11">
      <div className="grid-3">
        {options.map((option) => (
          <CardItem
            clicked={() => cardActivation(option.id)}
            key={option.id}
            title={option.title}
            active={option.active}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
