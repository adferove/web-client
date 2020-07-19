import React, { useContext } from 'react';
import CardItem from './CardItem/CardItem';
import TriageContext from '../../../context/triage/triageContext';

const Cards = () => {
  const triageContext = useContext(TriageContext);
  const { cardActivation, problemOptions: options } = triageContext;
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
