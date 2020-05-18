import React, { useContext } from 'react';
import classes from './Results.module.css';
import ItemResult from './ItemResult/ItemResult';
import Loading from '../../UI/Loading/Loading';
import DictionaryContext from '../../../context/dictionary/dictionaryContext';

const Results = () => {
  const dictionaryContext = useContext(DictionaryContext);
  const { loading, legalDefinitions } = dictionaryContext;
  if (loading) {
    return <Loading />;
  } else {
    if (legalDefinitions !== null && legalDefinitions.length > 0) {
      return (
        <div className={[classes.Result, 'grid-2'].join(' ')}>
          {legalDefinitions.map((item, index) => {
            return (
              <ItemResult key={index} word={item.key} definition={item.def} />
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  }
};

export default Results;
