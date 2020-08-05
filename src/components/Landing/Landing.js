import React, { Fragment } from 'react';
import Section from '../common/Section/Section';
import pages from '../../common/data/pages.json';
import { Link } from 'react-router-dom';

const Landing = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const page = pages.find((item) => item.page === 'landing');

  return (
    <Fragment>
      <Section preTitle={page.preTitle} title={page.title}>
        <div className="land-la-w-img" />
      </Section>
      <Section grey>
        <div className="dic-la-w-l11 dic-la-w-l11__no-bold">
          {page.paragraphs.map((item) => {
            let itemStyle = `dic-yg-2 dic-yg-2-img dic-yg-2-img__${item.icon}`;
            return (
              <div
                key={item.id}
                className={itemStyle}
                dangerouslySetInnerHTML={{ __html: item.paragraph }}
              ></div>
            );
          })}
        </div>
      </Section>
      <Section grey>
        <div className="dic-la-w-l11">
          <div>
            <Link
              className="triage-button triage-button--highlight"
              to="/tool"
              onClick={scrollToTop}
            >
              Start
            </Link>
          </div>
          <div className="la-btn-idf">
            <Link
              className="triage-button triage-button--outline"
              to="/contact-legal-aid"
              onClick={scrollToTop}
            >
              I don't feel safe
            </Link>
          </div>
        </div>
      </Section>
    </Fragment>
  );
};

export default Landing;
