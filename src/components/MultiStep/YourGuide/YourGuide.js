import React, { Fragment, useContext, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Link } from 'react-router-dom';
import TriageContext from '../../../context/triage/triageContext';
import Section from '../../common/Section/Section';
import yourGuide from '../../../assets/images/your-guide.svg';

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
        <Section preTitle="Your results summary" title="Legal guide">
          <img
            src={yourGuide}
            alt="your-guide"
            className="dic-la dic-la__dic-your-guide"
          />
        </Section>
        <Section grey>
          <div className="dic-la-w-l11 dic-la-w-l11__no-bold">
            {activeFacts.map((fact) => {
              let factStyle = `dic-yg-2 dic-yg-2-img dic-yg-2-img__${fact.icon}`;
              return (
                <Fragment>
                  <div
                    key={fact.pos}
                    className={factStyle}
                    dangerouslySetInnerHTML={{ __html: fact.desc }}
                  ></div>
                </Fragment>
              );
            })}
          </div>
        </Section>
        <Section maroon title="Your Next Steps">
          <div
            className="dic-la-w-l11 dic-la-w-l11__no-bold"
            dangerouslySetInnerHTML={{
              __html: selectedOption.YourNextStepText,
            }}
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
      </div>
      <Section grey>
        <div className="dic-la-w-l11">
          <div>
            {/* <PrintButton id={id} label="Download my summary" /> */}
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
