import React, { useContext } from 'react';
import SideNavigationContext from '../../../../context/sideNavigation/sideNavigationContext';

const ToggleMenu = () => {
  const sideNavigationContext = useContext(SideNavigationContext);
  const { toggleSideNav } = sideNavigationContext;
  return (
    <div className="toggle-menu" onClick={toggleSideNav}>
      <div className="toggle-menu-b">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span>Menu</span>
    </div>
  );
};

export default ToggleMenu;
