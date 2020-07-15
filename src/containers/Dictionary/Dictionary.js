import React from 'react';
import Search from '../../components/Dictionary/Search/Search';
import Notification from '../../UI/Notification/Notification';
import DictionaryState from '../../context/dictionary/DictionaryState';

const Dictionary = () => {
  return (
    <DictionaryState>
      <Notification />
      <div className="dic-la">
        <div className="dic-la-wrapper">
          <div className="dic-la-w-l1">
            <div className="dic-la-w-l11">
              <h1 className="dic-la-w-l11-h1">Legal dictionary</h1>
            </div>
            <Search />
          </div>
        </div>
      </div>
    </DictionaryState>
  );
};

export default Dictionary;
