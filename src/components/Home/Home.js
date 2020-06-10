import React from 'react';
import classes from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className={[classes.Home, 'grid-1'].join(' ')}>
    <Link to="/dictionary">
      <div className={classes.card}>Legal Dictionary</div>
    </Link>
    <Link to="/faqs">
      <div className={classes.card}>FAQs</div>
    </Link>
    <Link to="/legalbot">
      <div className={classes.card}>Triage Tool</div>
    </Link>
  </div>
);

export default Home;
