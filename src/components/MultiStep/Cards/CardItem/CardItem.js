import React, { Fragment, useState } from 'react';
import WordDefinition from './WordDefinition';
import Backdrop from '../../../../UI/Backdrop/Backdrop';

const CardItem = ({ title, active, clicked, image, disabled, definition }) => {
  const [open, setOpen] = useState(false);
  let mainStyle = 'nsw-card';
  let cardStyle = 'nsw-card__content nsw-card__cd nsw-card__pathway';
  if (active) {
    mainStyle = ['nsw-card', 'nsw-card__active'].join(' ');
    cardStyle = ['nsw-card__content', 'nsw-card__cd'].join(' ');
  }
  if (disabled) {
    mainStyle = ['nsw-card', 'nsw-card__disabled'].join(' ');
    cardStyle = ['nsw-card__content'].join(' ');
  }
  let imgStyle = '';
  if (image) {
    imgStyle = ['nsw-card__image', 'nsw-card__image__' + image].join(' ');
  }
  const showDefinition = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const closeModal = (e) => {
    e.preventDefault();
    setOpen(false);
  };
  return (
    <Fragment>
      <Backdrop showBackdrop={open} hideBackdrop={closeModal} />
      <div className={mainStyle}>
        <div onClick={clicked} className={cardStyle}>
          {title}
          {image && <div className={imgStyle}></div>}
        </div>
        {definition && (
          <div onClick={showDefinition} className="nsw-card__icon">
            <i id="btn-quick-exit2" className="material-icons dic-color-i">
              info_outline
            </i>
          </div>
        )}
      </div>
      {open && (
        <WordDefinition
          word={title}
          close={closeModal}
          definition={definition}
        />
      )}
    </Fragment>
  );
};

export default CardItem;
