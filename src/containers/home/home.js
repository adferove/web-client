import React, { Fragment } from 'react';
import Header from '../../components/navigation/Header/Header';
import SideNavigation from '../../components/navigation/SideNavigation/SideNavigation';
import Landing from '../../components/Landing/Landing';

const home = () => {
  return (
    <Fragment>
      <SideNavigation />
      <Header />
      <Landing />
    </Fragment>
  );
};

export default home;
