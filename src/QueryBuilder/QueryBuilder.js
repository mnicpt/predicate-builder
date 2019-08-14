import React, { useState } from 'react';
import Query from '../Query';
import DeleteButton from '../DeleteButton';
import './QueryBuilder.scss';

const QueryBuilder = () => {
  const [queries, setQueries] = useState([
    {
      name: 'user_first_name',
      type: 'string',
      condition: 'equals',
      value: 'Steve'
    },
    {
      name: 'user_last_name',
      type: 'string',
      condition: 'starts_with',
      value: 'M'
    }
  ]);

  const updateQuery = (id, query) => {
    setQueries(queries.map((existingQuery, index) => {
      if (id === index) {
        return query;
      } else {
        return existingQuery;
      }
    }));
  };

  const deleteQuery = (e) => {
    setQueries(queries.slice(0, queries.length - 1));
  };

  return (
    <div className='query-builder'>
      {queries.map((query, index) =>
        <div key={'row' + index} className='query-row'>
          <DeleteButton
            key={'btn' + index}
            className={queries.length - 1 === index ? 'current' : ''}
            disabled={queries.length - 1 === index ? false : true}
            onClick={deleteQuery}
          />
          <Query
            key={query.name + index}
            id={index}
            name={query.name}
            type={query.type}
            condition={query.condition}
            value={query.value}
            updateQuery={updateQuery}
          />
        </div>
      )}
    </div>
  );
};

export default QueryBuilder;