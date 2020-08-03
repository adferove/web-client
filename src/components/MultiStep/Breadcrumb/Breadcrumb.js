import React, { Fragment } from 'react';
import Step from './Step/Step';
import Arrow from './Arrow/Arrow';

const Breadcrumb = ({ step, form }) => {
  let yourProblem = <Step title="Your problem" />;
  let aboutYou = <Step title="About you" />;
  let yourGuide = <Step title="Your guide" />;
  let steps = 5;
  switch (form) {
    case 'YourProblem':
      yourProblem = <Step title="Your problem" active />;
      break;
    case 'AboutYou':
      aboutYou = <Step title="About you" active />;
      steps = 6;
      break;
    case 'YourGuide':
      yourGuide = <Step title="Your guide" active />;
      break;
    default:
      yourProblem = <Step title="Your problem" active />;
      break;
  }

  const current = step - 1;
  const progressBar = Array(steps)
    .fill(null)
    .map((_, i) => {
      if (i === current) return <li key={i} className="page-item active"></li>;
      else return <li key={i} className="page-item "></li>;
    });

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
      {true && (
        <div className="dic-la">
          <div className="dic-la-wrapper">
            <div className="bc-lay-m-1">
              <ul className="pagination">{progressBar.map((item) => item)}</ul>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Breadcrumb;
