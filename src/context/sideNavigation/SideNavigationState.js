import React, { useReducer } from 'react';
import SideNavigationContext from './sideNavigationContext';
import SideNavigationReducer from './sideNavigationReducer';
import { OPEN_SIDE_NAVIGATION, CLOSE_SIDE_NAVIGATION } from '../types';

const SideNavigationState = (props) => {
  const initialState = {
    openSideNav: false,
  };

  const [state, dispatch] = useReducer(SideNavigationReducer, initialState);

  const toggleSideNav = () => {
    if (state.openSideNav) closeSideNavigation();
    else openSideNavigation();
  };

  const openSideNavigation = () => {
    dispatch({
      type: OPEN_SIDE_NAVIGATION,
    });
  };

  const closeSideNavigation = () => {
    dispatch({
      type: CLOSE_SIDE_NAVIGATION,
    });
  };

  return (
    <SideNavigationContext.Provider
      value={{
        openSideNav: state.openSideNav,
        toggleSideNav,
      }}
    >
      {props.children}
    </SideNavigationContext.Provider>
  );
};

export default SideNavigationState;
