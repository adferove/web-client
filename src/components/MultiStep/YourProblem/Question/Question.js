import React, { Fragment, useContext } from 'react';
import TriageContext from '../../../../context/triage/triageContext';
import NotificationContext from '../../../../context/notification/notificationContext';
import Notification from '../../../../UI/Notification/Notification';
import Section from '../../../common/Section/Section';
import CheckBox from '../../../common/CheckBox/CheckBox';
import Footer from '../../Footer/Footer';
import RichSentence from '../../RichSentence/RichSentence';

const Question = () => {
  const notificationContext = useContext(NotificationContext);
  const triageContext = useContext(TriageContext);

  const { notificationHandler } = notificationContext;

  const {
    selectedOption,
    nextQuestion,
    backQuestion,
    checkQuestion,
  } = triageContext;

  const nextStep = (e) => {
    e.preventDefault();
    let question = selectedOption.problemQuestions.find(
      (el) => el.step === selectedOption.questionStep
    );
    const selection = question.options.find((option) => option.checked);
    if (selection) nextQuestion();
    else notificationHandler('Please select one option', 'error');
  };

  const prevStep = (e) => {
    e.preventDefault();
    backQuestion();
  };

  let stepOf = `Question ${selectedOption.questionStep} of ${selectedOption.problemQuestions.length}`;

  let question = selectedOption.problemQuestions.find(
    (el) => el.step === selectedOption.questionStep
  );

  return (
    <Fragment>
      <Notification />
      <Section preTitle={stepOf} title={selectedOption.title}></Section>
      <Section grey>
        <div className="land-text-row">
          <p>
            <RichSentence questions={question.questions} />
          </p>
        </div>
        {question.options.map((item) => (
          <CheckBox
            id={item.id}
            name={item.name}
            desc={item.desc}
            chk={item.checked}
            key={item.id}
            clicked={() => checkQuestion(item.id)}
          />
        ))}
      </Section>

      <Footer back={prevStep} next={nextStep} />
    </Fragment>
  );
};

export default Question;
