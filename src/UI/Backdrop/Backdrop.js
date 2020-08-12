import React from 'react';

const Backdrop = ({ showBackdrop, hideBackdrop, header }) => {
  let style = ['backdrop'];
  if (header) style = ['backdrop', 'backdrop__header'];
  return showBackdrop ? (
    <div className={style.join(' ')} onClick={hideBackdrop}></div>
  ) : null;
};

export default Backdrop;
