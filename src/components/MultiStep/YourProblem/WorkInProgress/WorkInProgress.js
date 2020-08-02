import React from 'react';
import workInProgress from '../../../../assets/images/workinprogress.svg';
import Section from '../../../common/Section/Section';

const WorkInProgress = () => {
  return (
    <Section>
      <img src={workInProgress} alt="Work in progress" className="dic-wip" />
    </Section>
  );
};

export default WorkInProgress;
