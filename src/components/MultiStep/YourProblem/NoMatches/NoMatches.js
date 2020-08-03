import React from 'react';

const NoMatches = () => {
  return (
    <div className="dic-la-w-l11 dic-la-w-l11__no-bold">
      <p>
        <strong>Sugestions</strong>
      </p>
      <ul>
        <li>Make sure all words are spelled correctly</li>
        <li>Try different search terms</li>
        <li>Try more general search terms</li>
        <li>Try fewers search terms</li>
      </ul>

      <p>
        <strong>Need Legal Help?</strong>
      </p>
      <p>
        If you are unsure of what you are looking for or would prefer to talk to
        someone about your legal problem please call us on{' '}
        <strong>1300 888 529&nbsp;</strong>Monday to Friday, 9am - 5pm
      </p>
    </div>
  );
};

export default NoMatches;
