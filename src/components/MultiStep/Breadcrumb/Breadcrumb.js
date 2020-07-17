import React from 'react';
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
  );
};

export default Breadcrumb;
