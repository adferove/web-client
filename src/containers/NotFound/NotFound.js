import React, { Fragment } from 'react';
import SideNavigation from '../../components/navigation/SideNavigation/SideNavigation';
import Header from '../../components/navigation/Header/Header';

const notFund = () => (
  <Fragment>
    <SideNavigation />
    <Header />
    <h1>404 Page not found</h1>
  </Fragment>
);

export default notFund;
