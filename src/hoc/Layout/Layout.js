import React from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const layout = (props) => (
  <Auxiliary>
    <Toolbar />
    <main>{props.children}</main>
  </Auxiliary>
);

export default layout;
