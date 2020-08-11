import React, { Fragment, useState } from 'react';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import WordDefinition from '../Cards/CardItem/WordDefinition';

const RichSentence = ({ questions }) => {
  const [open, setOpen] = useState(false);
  const showDefinition = (e) => {
    e.preventDefault();
    setOpen((open) => true);
  };
  const closeModal = (e) => {
    e.preventDefault();
    setOpen((open) => false);
  };

  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return questions.map((q) => {
    if (q.def)
      return (
        <Fragment key={q.pos}>
          <Backdrop showBackdrop={open} hideBackdrop={closeModal} />
          <strong className="land-text-pointer" onClick={showDefinition}>
            {q.sentence}
            <i id="help-i" className="material-icons dic-color-i">
              help_outline
            </i>
          </strong>
          {open && (
            <WordDefinition
              word={capitalize(q.sentence)}
              close={closeModal}
              definition={q.def}
            />
          )}
        </Fragment>
      );
    return <Fragment>{q.sentence}</Fragment>;
  });
};

export default RichSentence;
