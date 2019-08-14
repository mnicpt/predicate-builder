import React, { useState } from 'react';
import Query from '../Query';
import AddButton from '../AddButton';
import DeleteButton from '../DeleteButton';
import SearchButton from '../SearchButton';
import './QueryBuilder.scss';

const QueryBuilder = () => {
  const [queries, setQueries] = useState([{
    name: 'user_first_name',
    type: 'string',
    condition: 'equals',
    value: ['']
  }]);
  const [statement, setStatement] = useState('');

  const addQuery = () => {
    setQueries([...queries, {
      name: 'user_first_name',
      type: 'string',
      condition: 'equals',
      value: ['']
    }])
  };

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

  const search = (e) => {
    fetch('http://localhost:4000/api/v1/query', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(queries)
    })
      .then(response => response.text())
      .then(body => setStatement(body))
      .catch(error => console.error('Error: ', error));
  };

  return (
    <div className='query-builder'>
      {queries.map((query, index) =>
        <div key={'row' + index} className='query-row'>
          <DeleteButton
            key={'btn' + index}
            className={queries.length - 1 === index ? 'current' : ''}
            disabled={queries.length - 1 === index && queries.length !== 1 ? false : true}
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
      <AddButton onClick={addQuery} />
      <footer>
        <div className='query-result'><b>Query result: </b><br />{statement}</div>
        <SearchButton onClick={search} />
      </footer>
    </div>
  );
};

export default QueryBuilder;