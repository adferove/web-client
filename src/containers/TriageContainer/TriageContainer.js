import React, { Fragment } from 'react';
import SideNavigation from '../../components/navigation/SideNavigation/SideNavigation';
import Header from '../../components/navigation/Header/Header';

const TriageContainer = (props) => {
  return (
    <Fragment>
      <SideNavigation />
      <Header />
      {props.children}
    </Fragment>
  );
};

export default TriageContainer;
