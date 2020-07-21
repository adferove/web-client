import React from "react";

const CheckBox = ({ id, name, desc, clicked, chk }) => {
  return (
    <div className="dic-la-w-l11">
      <div className="dic-la-checkbox">
        <input
          onChange={clicked}
          className="dic-la-checkbox__input"
          type="checkbox"
          name={name}
          id={id}
          checked={chk}
        />
        <label className="dic-la-checkbox__label" htmlFor={id}>
          {desc}
        </label>
      </div>
    </div>
  );
};

export default CheckBox;
