import React from 'react';

const CheckBox = ({ id, name, desc }) => {
  return (
    <div className="dic-la-w-l11">
      <div className="dic-la-checkbox">
        <input
          className="dic-la-checkbox__input"
          type="checkbox"
          name={name}
          id={id}
        />
        <label className="dic-la-checkbox__label" for={id}>
          {desc}
        </label>
      </div>
    </div>
  );
};

export default CheckBox;
