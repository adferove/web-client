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
        type="search"
        name="text"
        placeholder="Type sentences or keywords"
      />
      <span className="txt-normal">Top Legal Problems</span>
    </div>
  );
};

export default InputIntend;
