import React, { Fragment, useContext } from 'react';
import TriageContext from '../../../../context/triage/triageContext';
import Section from '../../../common/Section/Section';
import CheckBox from '../../../common/CheckBox/CheckBox';
import Footer from '../../Footer/Footer';

const Question = () => {
  const triageContext = useContext(TriageContext);
  const {
    selectedOption,
    nextQuestion,
    backQuestion,
    checkQuestion,
  } = triageContext;
  const nextStep = (e) => {
    e.preventDefault();
    nextQuestion();
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
      <Section preTitle={stepOf} title={selectedOption.title}></Section>
      <Section grey>
        <div className="land-la-w-l11">
          <div className="land-la-w-l112-p">{question.desc}</div>
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
