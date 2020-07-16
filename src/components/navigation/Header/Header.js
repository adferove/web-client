import React from 'react';
import { Link } from 'react-router-dom';
import ToggleMenu from './ToggleMenu/ToggleMenu';
import Logo from './Logo/Logo';
import QuickExit from './QuickExit/QuickExit';

const Header = (props) => {
  return (
    <div className="app-la-wrapper">
      <header className="header-la">
        <div className="header-la-wrapper">
          <ToggleMenu />
          <Link to="/">
            <Logo />
          </Link>
          <QuickExit />
        </div>
      </header>
      {props.children}
    </div>
  );
};

export default Header;
