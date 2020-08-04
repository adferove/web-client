import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
  let history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <div className="land-la">
      <div className="land-la-wrapper">
        <div className="land-la-w-l1-foo">
          <div className="land-la-w-l11 land-la-w-l11__row" onClick={goBack}>
            <i id="btn-quick-exit" className="material-icons">
              keyboard_backspace
            </i>
            <b>Back</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackButton;
