import React, { useState } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideNavigation from '../../components/Navigation/SideNavigation/SideNavigation';
import classes from './Layout.module.css';

const Layout = (props) => {
  const [openSideNav, setOpenSideNav] = useState(false);
  const toggleSideNav = () => {
    setOpenSideNav((openSideNav) => !openSideNav);
  };
  return (
    <Auxiliary>
      <Toolbar toggled={toggleSideNav} />
      <SideNavigation open={openSideNav} close={toggleSideNav} />
      <main className={classes.Layout}>{props.children}</main>
    </Auxiliary>
  );
};

export default Layout;
