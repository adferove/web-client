import React from 'react';

const Landing = () => {
  return (
    <div className="land-la">
      <div className="land-la-wrapper">
        <div className="land-la-w-l1">
          <div className="land-la-w-l11">
            <h1 className="land-la-w-l11-h1">Your questions answered</h1>
          </div>
        </div>
        <img
          alt=""
          className="land-la-w-img"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        />
        <div className="land-la-w-l1">
          <div className="land-la-w-l11">
            <div className="land-la-w-l111">
              <h2 className="land-la-w-l111-h2">About this self-help tool</h2>
            </div>
            <div className="land-la-w-l112">
              <p className="land-la-w-l112-p">
                Begin your legal journey with this 5-minute tool to understand
                your problem and see what resources are available for your case.
                You control how much information you provide, which will remain
                anonymous through the tool.
              </p>
            </div>
            <div className="land-la-w-l111">
              <h2 className="land-la-w-l111-h2">What happens next</h2>
            </div>
            <div className="land-la-w-l112">
              <p className="land-la-w-l112-p">
                We'll ask you a few questions and match you with any of our
                services that may be able to assist.
              </p>
            </div>
          </div>
          <div className="land-la-w-l11">
            <div>
              <button className="triage-button triage-button--highlight">
                Start
              </button>
            </div>
            <div>
              <button className="triage-button triage-button--outline">
                I don't feel safe
              </button>
            </div>
          </div>
          <div className="land-la-w-l12"></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
