import React from 'react';

const Breadcrumb = () => {
  return (
    <div className="app-la-wrapper app-la-wrapper__breadcrumb">
      <div className="bc-lay-m">
        <div className="bc-lay-m-1">
          <div className="bc-lay-m-11">
            <div className="bc-lay-m-111">
              <div className="bc-lay-m-1111">
                <p className="bc-lay-m-1111-p bc-lay-m-1111-p__bold">
                  Your Problem
                </p>
              </div>
              <div className="bc-lay-m-1111">
                <p className="bc-lay-m-1111-p bc-lay-m-1111-p__arrow">{'>'}</p>
              </div>
              <div className="bc-lay-m-1111">
                <p className="bc-lay-m-1111-p">About you</p>
              </div>
              <div className="bc-lay-m-1111">
                <p className="bc-lay-m-1111-p bc-lay-m-1111-p__arrow">{'>'}</p>
              </div>
              <div className="bc-lay-m-1111">
                <p className="bc-lay-m-1111-p">Your Guide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
