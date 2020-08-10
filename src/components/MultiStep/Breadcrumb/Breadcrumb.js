import React, { Fragment } from 'react';
import Step from './Step/Step';
import Arrow from './Arrow/Arrow';
import { ABOUT_YOU, YOUR_LEGAL_GUIDE } from '../../../context/triage/forms';

const Breadcrumb = ({ step, form, stepQTy }) => {
  let yourProblem = <Step title="Your problem" />;
  let aboutYou = <Step title="About you" />;
  let yourGuide = <Step title="Your guide" />;
  switch (form) {
    case ABOUT_YOU:
      aboutYou = <Step title="About you" active />;
      break;
    case YOUR_LEGAL_GUIDE:
      yourGuide = <Step title="Your guide" active />;
      break;
    default:
      yourProblem = <Step title="Your problem" active />;
      break;
  }

  const current = step - 1;
  const progressBar = Array(stepQTy)
    .fill(null)
    .map((_, i) => {
      if (i === current) return <li key={i} className="page-item active"></li>;
      else return <li key={i} className="page-item "></li>;
    });
  let showProgress = true;
  if (step === stepQTy) showProgress = false;

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
      {showProgress && (
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
