import React, { Fragment } from 'react';
import Section from '../../components/common/Section/Section';
import LAServices from '../../components/LAServices/LAServices';
import BackButton from '../../components/BackButton/BackButton';
import YourSafety from '../../components/YourSafety/YourSafety';
import pages from '../../common/data/pages.json';

const ContactLA = () => {
  const page = pages.find((item) => item.page === 'i-dont-feel-safe');
  return (
    <Fragment>
      <YourSafety modal={page.modal} />
      <Section title={page.title}>
        <div className="land-la-w-l11">
          <div
            className="land-la-w-l112-p"
            dangerouslySetInnerHTML={{ __html: page.paragraph }}
          ></div>
        </div>
      </Section>
      <LAServices services={page.services} />
      <BackButton />
    </Fragment>
  );
};

export default ContactLA;
