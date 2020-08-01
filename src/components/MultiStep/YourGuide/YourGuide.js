import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import TriageContext from '../../../context/triage/triageContext';
import Section from '../../common/Section/Section';

const YourGuide = () => {
  const triageContext = useContext(TriageContext);
  const { selectedOption } = triageContext;

  let style = [
    'land-la-problem-img',
    'land-la-problem-img__' + selectedOption.imageYourGuide,
  ].join(' ');

  return (
    <Fragment>
      <Section
        preTitle={`Legal problem: ${selectedOption.title}`}
        title="Your legal guide"
      >
        <div className={style} />
      </Section>
      <Section grey>
        <div className="dic-la-w-l11 dic-la-w-l11__no-bold">
          {selectedOption.legalGuideFacts.map((fact) => {
            let style = `dic-yg-2 dic-yg-2-img dic-yg-2-img__${fact.icon}`;
            return (
              <div key={fact.pos} className={style}>
                {fact.desc}
              </div>
            );
          })}
        </div>
      </Section>
      <Section maroon title="Your Next Steps">
        <div
          className="dic-la-w-l11 dic-la-w-l11__no-bold"
          dangerouslySetInnerHTML={{ __html: selectedOption.YourNextStepText }}
        ></div>
      </Section>

      {selectedOption.legalGuideSections.map((legalSection) => (
        <Section key={legalSection.pos} grey title={legalSection.title}>
          <div
            className="dic-la-w-l11 dic-la-w-l11__no-bold"
            dangerouslySetInnerHTML={{
              __html: legalSection.content,
            }}
          ></div>
        </Section>
      ))}
      <Section grey>
        <div className="dic-la-w-l11">
          <div>
            <Link className="triage-button triage-button--highlight" to="/tool">
              Download my summary
            </Link>
          </div>
          <div>
            <Link className="triage-button triage-button--outline" to="/">
              I have another problem
            </Link>
          </div>
        </div>
      </Section>
    </Fragment>
  );
};

export default YourGuide;
