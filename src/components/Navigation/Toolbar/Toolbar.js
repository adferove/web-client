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
import {
  DICTIONARY,
  FAQS,
  LEGAL_BOT,
  HOME,
  TRIAGE_TOOL,
} from '../../../common/route';

const Toolbar = () => {
  const { pathname } = useLocation();
  let toolBarElement = (
    <Auxiliary>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
      <ToggleMenu />
    </Auxiliary>
  );
  let topBar = null;
  switch (pathname) {
    case DICTIONARY:
      break;
    case FAQS:
      break;
    case LEGAL_BOT:
      toolBarElement = (
        <Auxiliary>
          <div className={classes.Quickfix}>
            <QuickExit />
          </div>
        </Auxiliary>
      );
      topBar = <TopBar />;
      break;
    case HOME:
      break;
    case TRIAGE_TOOL:
      toolBarElement = (
        <Auxiliary>
          <div className={classes.Quickfix}>
            <QuickExit />
          </div>
        </Auxiliary>
      );
      break;
    default:
      break;
  }
  return (
    <Auxiliary>
      <header className={classes.Toolbar}>
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        {toolBarElement}
      </header>
      {topBar}
    </Auxiliary>
  );
};
export default Toolbar;
