import React from 'react';
import classes from './QuickExit.module.css';

const QuickExit = () => (
  <div className={classes.QuickExit}>
    <a href="http://www.bom.gov.au/nsw/forecasts/sydney.shtml">
      <button>QUICK EXIT</button>
    </a>
  </div>
);

export default QuickExit;
