import React from 'react';
import ArrowButton from '../../common/ArrowButton/ArrowButton';

const Footer = ({ back, next }) => {
  return (
    <div className="land-la">
      <div className="land-la-wrapper">
        <div className="land-la-w-l1-foo">
          {back && (
            <ArrowButton clickAction={back} iconName="west" label="Back" />
          )}
          {next && (
            <ArrowButton
              clickAction={next}
              iconName="east"
              label="Next"
              arrowRight
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
