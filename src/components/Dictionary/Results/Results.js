import React from 'react';
import classes from './Results.module.css';
import ItemResult from './ItemResult/ItemResult';
import Loading from '../../UI/Loading/Loading';

const results = ({ loading, results }) => {
  if (loading) {
    return <Loading />;
  } else {
    if (results !== null && results.length > 0) {
      return (
        <div className={[classes.Result, 'grid-2'].join(' ')}>
          {results.map((item, index) => {
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

export default results;
