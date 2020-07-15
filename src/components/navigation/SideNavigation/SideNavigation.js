import React, { useContext, Fragment } from 'react';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import SideNavigationContext from '../../../context/sideNavigation/sideNavigationContext';
import NavigationItems from '../NavigationItems/NavigationItems';

const SideNavigation = () => {
  const sideNavigationContext = useContext(SideNavigationContext);
  const { openSideNav: open, toggleSideNav: close } = sideNavigationContext;
  let sideNavigationClasses = 'side-navigation close-side-nav';
  if (open) {
    sideNavigationClasses = 'side-navigation open-side-nav';
  }
  return (
    <Fragment>
      <Backdrop showBackdrop={open} hideBackdrop={close} />
      <div className={sideNavigationClasses}>
        <nav onClick={close}>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default SideNavigation;
