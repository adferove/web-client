import React, { Fragment, useContext, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Link } from 'react-router-dom';
import TriageContext from '../../../context/triage/triageContext';
import Section from '../../common/Section/Section';

const YourGuide = () => {
  const triageContext = useContext(TriageContext);
  const { selectedOption } = triageContext;
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const activeFacts = selectedOption.legalGuideFacts.filter(
    (item) => item && item.show
  );

  return (
    <Fragment>
      <div className="dic-la" ref={componentRef}>
        <Section
          preTitle="Your results summary"
          title="Legal guide"
          print
          top
        ></Section>
        <Section grey>
          <div className="dic-la-w-l11 dic-la-w-l11__no-bold dic-la-w-l11__print">
            {activeFacts.map((fact) => {
              return (
                <Fragment key={fact.pos}>
                  <div className="your-guide-group">
                    <i className="material-icons your-safety-align__icon">
                      {fact.icon}
                    </i>
                    <div
                      key={fact.pos}
                      dangerouslySetInnerHTML={{ __html: fact.desc }}
                    ></div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </Section>
        <Section print grey title="Your Next Steps"></Section>

        {selectedOption.legalGuideSections.map((legalSection) => (
          <Section key={legalSection.pos} grey title={legalSection.title} print>
            <div
              className="dic-la-w-l11 dic-la-w-l11__no-bold dic-la-w-l11__print"
              dangerouslySetInnerHTML={{
                __html: legalSection.content,
              }}
            ></div>
          </Section>
        ))}
      </div>
      <Section grey>
        <div className="dic-la-w-l11">
          <div>
            <button
              onClick={handlePrint}
              className="triage-button triage-button--highlight"
            >
              Download my summary
            </button>
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
