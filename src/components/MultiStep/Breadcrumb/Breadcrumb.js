import React, { Fragment } from 'react';
import Step from './Step/Step';
import Arrow from './Arrow/Arrow';

const Breadcrumb = ({ step }) => {
  let yourProblem = <Step title="Your problem" />;
  let aboutYou = <Step title="About you" />;
  let yourGuide = <Step title="Your guide" />;
  switch (step) {
    case 1:
      yourProblem = <Step title="Your problem" active />;
      break;
    case 2:
      aboutYou = <Step title="About you" active />;
      break;
    case 3:
      yourGuide = <Step title="Your guide" active />;
      break;
    default:
      yourProblem = <Step title="Your problem" active />;
      break;
  }
  return (
    <Fragment>
      <div className="app-la-wrapper app-la-wrapper__breadcrumb">
        <div className="bc-lay-m">
          <div className="bc-lay-m-1">
            <div className="bc-lay-m-11">
              <div className="bc-lay-m-111">
                {yourProblem}
                <Arrow />
                {aboutYou}
                <Arrow />
                {yourGuide}
              </div>
            </div>
          </div>
        </div>
      </div>
      {false && (
        <div className="dic-la">
          <div className="dic-la-wrapper">
            <div className="bc-lay-m-1">
              <ul className="pagination">
                <li className="page-item "></li>
                <li className="page-item"></li>
                <li className="page-item"></li>
                <li className="page-item active"></li>
                <li className="page-item "></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Breadcrumb;
