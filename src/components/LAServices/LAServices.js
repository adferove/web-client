import React from 'react';
import LAService from './LAService/LAService';

const LAServices = ({ services }) => {
  return (
    <div className="land-la">
      <div className="land-la-wrapper land-la-wrapper__grey ">
        <div className="land-la-w-l1">
          <div className="land-la-w-l11">
            {services.map((item) => (
              <LAService
                key={item.id}
                title={item.title}
                services={item.particularServices}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LAServices;
