import React, { useContext } from 'react';
import classes from './ToggleMenu.module.css';
import SideNavigationContext from '../../../context/sideNavigation/sideNavigationContext';

const ToggleMenu = () => {
  const sideNavigationContext = useContext(SideNavigationContext);
  const { toggleSideNav } = sideNavigationContext;
  return (
    <div className={classes.ToggleMenu} onClick={toggleSideNav}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ToggleMenu;
