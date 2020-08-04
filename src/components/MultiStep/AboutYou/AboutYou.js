import React, { Fragment, useContext } from 'react';
import TriageContext from '../../../context/triage/triageContext';
import Section from '../../common/Section/Section';
import CheckBox from '../../common/CheckBox/CheckBox';
import NotificationContext from '../../../context/notification/notificationContext';
import Notification from '../../../UI/Notification/Notification';
import Footer from '../Footer/Footer';

const AboutYou = () => {
  const notificationContext = useContext(NotificationContext);
  const triageContext = useContext(TriageContext);
  const { notificationHandler } = notificationContext;
  const {
    back,
    beforeNext,
    checkAboutYou,
    selectedOption,
    updateFacts,
  } = triageContext;

  const nextStep = (e) => {
    e.preventDefault();
    const selection = selectedOption.aboutYouChecks.filter(
      (checkbox) => checkbox.checked
    );
    if (selection && selection.length > 0) {
      updateFacts();
      beforeNext();
    } else notificationHandler('Please select one option', 'error');
    scrollToTop();
  };

  const prevStep = (e) => {
    e.preventDefault();
    back();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  let styleStep2 = [
    'land-la-problem-img',
    'land-la-problem-img__' + selectedOption.imageAboutYou,
  ].join(' ');

  return (
    <Fragment>
      <Notification />
      <Section
        preTitle="About you"
        title={selectedOption.aboutYouStep2Title}
        noBottom
      >
        <div className={styleStep2} />
      </Section>
      <Section grey>
        {selectedOption.aboutYouChecks.map((item) => (
          <CheckBox
            id={item.id}
            name={item.name}
            desc={item.desc}
            chk={item.checked}
            key={item.id}
            clicked={() => checkAboutYou(item.id)}
          />
        ))}
      </Section>
      <Footer back={prevStep} next={nextStep} />
    </Fragment>
  );
};

export default AboutYou;
