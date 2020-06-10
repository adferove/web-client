import React from 'react';
import classes from './Legalbot.module.css';
import InputIntend from './InputIntend/InputIntend';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Footer from './Footer/Footer';

const Legalbot = () => {
  return (
    <Auxiliary>
      <div className={classes.Legalbot}>
        <InputIntend />
      </div>
      <Footer />
    </Auxiliary>
  );
};

export default Legalbot;
