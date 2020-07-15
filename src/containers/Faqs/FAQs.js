import React from 'react';
import Search from '../../components/Faqs/Search/Search';
import Notification from '../../UI/Notification/Notification';
import FAQsState from '../../context/faqs/FAQsState';

const FAQs = () => {
  return (
    <FAQsState>
      <Notification />
      <div className="dic-la">
        <div className="dic-la-wrapper">
          <div className="dic-la-w-l1">
            <div className="dic-la-w-l11">
              <h1 className="dic-la-w-l11-h1">FAQs</h1>
            </div>
            <Search />
          </div>
        </div>
      </div>
    </FAQsState>
  );
};

export default FAQs;
