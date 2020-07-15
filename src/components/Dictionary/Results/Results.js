import React from 'react';
import ItemResult from './ItemResult/ItemResult';
import Loading from '../../../UI/Loading/Loading';

const Results = ({ loading, legalDefinitions }) => {
  if (loading) {
    return <Loading />;
  } else {
    if (legalDefinitions !== null && legalDefinitions.length > 0) {
      return (
        <div className="dic-la-w-l111">
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
