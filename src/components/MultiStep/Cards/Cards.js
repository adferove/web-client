import React, { useContext } from 'react';
import CardItem from './CardItem/CardItem';
import TriageContext from '../../../context/triage/triageContext';

const Cards = () => {
  const triageContext = useContext(TriageContext);
  const { step, cardActivation, problemOptions: options } = triageContext;
  const nextStep = (optionId, disabled) => {
    if (disabled === undefined || !disabled) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      cardActivation(optionId);
    }
  };
  const filteredOptions = options.filter(
    (opt) => opt.step === step && opt.show
  );

  return (
    <div className="dic-la-w-l11">
      {step === 1 && (
        <div className="dic-sug">
          <i id="help-i" className="material-icons dic-color-i">
            info_outline
          </i>

          <p className="dic-def__no-bold">
            Click on the icon to find out the meaning of the words.
          </p>
        </div>
      )}

      <div className="grid-3">
        {filteredOptions.map((option) => (
          <CardItem
            clicked={() => nextStep(option.id, option.disabled)}
            key={option.id}
            title={option.title}
            definition={option.definition}
            active={option.active}
            image={option.cardImage}
            disabled={option.disabled}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
