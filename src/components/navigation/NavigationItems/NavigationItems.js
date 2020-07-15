import React from 'react';
import { useHistory } from 'react-router-dom';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
  let history = useHistory();
  let location = history.location.pathname;
  return (
    <div className="navigation-items">
      <ul className="navigation-items__list">
        <NavigationItem link={location} type="m">
          Menu
        </NavigationItem>
        <NavigationItem link="/" type="h">
          Home
        </NavigationItem>
        <NavigationItem link="/legal-dictionary" type="i">
          Legal dictionary
        </NavigationItem>
      </ul>
    </div>
  );
};

export default NavigationItems;
