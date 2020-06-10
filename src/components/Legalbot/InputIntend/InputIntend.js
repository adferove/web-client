import React from 'react';
import classes from './InputIntend.module.css';

const InputIntend = () => {
  const submitQuestionHandler = (e) => {
    console.log('Yellow', e.target.value);
  };
  return (
    <div className={classes.InputIntend}>
      <span className="txt-dict"> Describe your legal situation</span>
      <input
        onKeyPress={submitQuestionHandler}
        className="form-text"
        type="text"
        name="text"
        placeholder="Type sentences or keywords"
      />
    </div>
  );
};

export default InputIntend;
