import React, { Fragment } from 'react';

const QuickExit = () => {
  return (
    <Fragment>
      <a className="quick-exit" href="http://www.bom.gov.au">
        <div className="quick-exit-b">
          <i id="btn-quick-exit" className="material-icons">
            close
          </i>
        </div>
        <span>Quick Exit</span>
      </a>
    </Fragment>
  );
};

export default QuickExit;
