import React, { useState } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideNavigation from '../../components/Navigation/SideNavigation/SideNavigation';

const Layout = (props) => {
  const [openSideNav, setOpenSideNav] = useState(false);
  const toggleSideNav = () => {
    setOpenSideNav((openSideNav) => !openSideNav);
  };
  return (
    <Auxiliary>
      <Toolbar toggled={toggleSideNav} />
      <SideNavigation open={openSideNav} close={toggleSideNav} />
      <main>{props.children}</main>
    </Auxiliary>
  );
};

export default Layout;
