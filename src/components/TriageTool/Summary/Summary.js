import React from 'react';

const Summary = ({ prevStep }) => {
  return (
    <div>
      <p>Summary</p>
      <button onClick={prevStep}>Back</button>
    </div>
  );
};

export default Summary;
