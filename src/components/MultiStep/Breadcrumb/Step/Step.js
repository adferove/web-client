import React from 'react';

const Step = ({ title, active }) => {
  let style = ['bc-lay-m-1111-p'];
  if (active) style = ['bc-lay-m-1111-p', 'bc-lay-m-1111-p__bold'];
  return (
    <div className="bc-lay-m-1111">
      <p className={style.join(' ')}>{title}</p>
    </div>
  );
};

export default Step;
