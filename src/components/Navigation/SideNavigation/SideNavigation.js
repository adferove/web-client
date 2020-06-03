import React, { useContext } from 'react';
import classes from './SideNavigation.module.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideNavigationContext from '../../../context/sideNavigation/sideNavigationContext';

const SideNavigation = () => {
  const sideNavigationContext = useContext(SideNavigationContext);
  const { openSideNav: open, toggleSideNav: close } = sideNavigationContext;
  let sideNavigationClasses = [classes.SideNavigation, classes.Close];
  if (open) {
    sideNavigationClasses = [classes.SideNavigation, classes.Open];
  }
  return (
    <Auxiliary>
      <Backdrop showBackdrop={open} hideBackdrop={close} />
      <div className={sideNavigationClasses.join(' ')}>
        <nav onClick={close}>
          <NavigationItems />
        </nav>
      </div>
    </Auxiliary>
  );
};

export default SideNavigation;
