import React from 'react';
import classes from './Toolbar.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleMenu from '../ToggleMenu/ToggleMenu';

const Toolbar = ({ toggled }) => {
  return (
    <header className={classes.Toolbar}>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
      <ToggleMenu toggledMenu={toggled} />
    </header>
  );
};
export default Toolbar;
