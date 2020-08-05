import React, { useContext } from 'react';
import CardItem from './CardItem/CardItem';
import TriageContext from '../../../context/triage/triageContext';

const Cards = () => {
  const triageContext = useContext(TriageContext);
  const { step, cardActivation, problemOptions: options } = triageContext;
  const nextStep = (optionId) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    cardActivation(optionId);
  };
  const filteredOptions = options.filter((opt) => opt.step === step);

  return (
    <div className="dic-la-w-l11">
      <div className="grid-3">
        {filteredOptions.map((option) => (
          <CardItem
            clicked={() => nextStep(option.id)}
            key={option.id}
            title={option.title}
            active={option.active}
            image={option.cardImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
