import React from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideNavigation from '../../components/Navigation/SideNavigation/SideNavigation';
import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <Auxiliary>
      <Toolbar />
      <SideNavigation />
      <main className={classes.Layout}>{props.children}</main>
    </Auxiliary>
  );
};

export default Layout;
