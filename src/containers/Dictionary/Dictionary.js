import React from 'react';
import Search from '../../components/Dictionary/Search/Search';
import Notification from '../../UI/Notification/Notification';
import DictionaryState from '../../context/dictionary/DictionaryState';
import Section from '../../components/common/Section/Section';
import BackButton from '../../components/BackButton/BackButton';

const Dictionary = () => {
  return (
    <DictionaryState>
      <Notification />
      <Section title="Legal dictionary">
        <Search />
        <BackButton />
      </Section>
    </DictionaryState>
  );
};

export default Dictionary;
