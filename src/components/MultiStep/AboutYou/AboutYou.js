import React, { Fragment, useContext } from 'react';
import TriageContext from '../../../context/triage/triageContext';
import Section from '../../common/Section/Section';
import CheckBox from '../../common/CheckBox/CheckBox';

const AboutYou = () => {
  const triageContext = useContext(TriageContext);
  const { selectedOption } = triageContext;
  let style = [
    'land-la-problem-img',
    'land-la-problem-img__' + selectedOption.image,
  ].join(' ');

  let styleStep2 = [
    'land-la-problem-img',
    'land-la-problem-img__' + selectedOption.imageAboutYou,
  ].join(' ');

  switch (selectedOption.aboutYouCurrent) {
    case 1:
      return (
        <Fragment>
          <Section
            preTitle="Your legal problem is"
            title={selectedOption.title}
          >
            <div className={style} />
            <div className="land-la-w-l11">
              <div
                className="land-la-w-l112-p"
                dangerouslySetInnerHTML={{ __html: selectedOption.desc }}
              ></div>
            </div>
          </Section>
          <Section maroon>
            <div className="land-la-w-l11">
              <div
                className="land-la-w-l112-p"
                dangerouslySetInnerHTML={{ __html: selectedOption.note }}
              ></div>
            </div>
          </Section>
        </Fragment>
      );
    case 2:
      return (
        <Fragment>
          <Section
            preTitle="About you"
            title={selectedOption.aboutYouStep2Title}
            noBottom
          >
            <div className={styleStep2} />
          </Section>
          <Section grey>
            {selectedOption.aboutYouChecks.map((item) => (
              <CheckBox id={item.id} name={item.name} desc={item.desc} />
            ))}
          </Section>
        </Fragment>
      );
    default:
      return null;
  }
};

export default AboutYou;
