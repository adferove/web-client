import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/dictionary">Legal dictionary</NavigationItem>
    <NavigationItem link="/faqs">FAQs</NavigationItem>
  </ul>
);

export default NavigationItems;
