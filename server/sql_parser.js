const expression_translations = {
  equals: '=',
  contains: '',
  starts_with: 'LIKE',
  between: 'BETWEEN',
  greater_than: '>',
  less_than: '<',
  in_list: 'IN'
};

const parseValue = (query) => {
  let value = Array.isArray(query.value) ? query.value.join(' AND ') : query.value;

  if (query.condition === 'in_list') {
    value = `(${value})`;
  } else if (query.condition === 'starts_with') {
    value = `(${value}%)`;
  }

  return value;
};

const SQLParser = (table_name, queries) => {
  let columns = [];
  let expression = '';

  queries.forEach((query, index) => {
    columns.push(query.name);

    let value = parseValue(query);

    if (index === 0) {
      expression += `${query.name} ${expression_translations[query.condition]} ${value} `;
    } else {
      expression += `AND ${query.name} ${expression_translations[query.condition]} ${value} `;
    }
  });

  return `SELECT ${columns.join(', ')} FROM ${table_name} WHERE ${expression}`;
};

module.exports = SQLParser