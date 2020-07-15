import React, { Fragment } from 'react';
import BasicSection from '../../components/common/BasicSection/BasicSection';
import LAServices from '../../components/LAServices/LAServices';
import BackButton from '../../components/BackButton/BackButton';

const ContactLA = () => {
  const title = 'Contact Legal Aid NSW';
  const paragraph1 = (
    <p>
      We are open and continue to offer our services over the phone, or via
      email or AVL. If you need legal help, <b>call 1300 888 529</b> or contact
      your local Legal Aid office
    </p>
  );
  const paragraph2 = '9am to 5pm, Monday to Friday (excluding public holidays)';
  return (
    <Fragment>
      <BasicSection
        title={title}
        paragraph1={paragraph1}
        paragraph2={paragraph2}
      />
      <LAServices />
      <BackButton />
    </Fragment>
  );
};

export default ContactLA;
