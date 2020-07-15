import React from 'react';

const Backdrop = (props) =>
  props.showBackdrop ? (
    <div className="backdrop" onClick={props.hideBackdrop}></div>
  ) : null;

export default Backdrop;
