import React from 'react';
import classes from './Toolbar.module.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleMenu from '../ToggleMenu/ToggleMenu';
import QuickExit from '../QuickExit/QuickExit';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import TopBar from '../../Legalbot/TopBar/TopBar';

const Toolbar = () => {
  const { pathname } = useLocation();
  let showQuickExit = false;
  if (pathname === '/legalbot') {
    showQuickExit = true;
  }
  return (
    <header className={classes.Toolbar}>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      {!showQuickExit && (
        <Auxiliary>
          <nav className={classes.DesktopOnly}>
            <NavigationItems />
          </nav>
          <ToggleMenu />
        </Auxiliary>
      )}
      {showQuickExit && (
        <Auxiliary>
          <div className={classes.Quickfix}>
            <QuickExit />
          </div>
          <div className={classes.TopBar}>
            <TopBar />
          </div>
        </Auxiliary>
      )}
    </header>
  );
};
export default Toolbar;
