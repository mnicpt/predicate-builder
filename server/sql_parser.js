const expression_translations = {
  equals: '=',
  contains: '',
  starts_with: 'LIKE',
  between: 'BETWEEN',
  greater_than: '>',
  less_than: '<',
  in_list: 'IN'
};

const SQLParser = (table_name, queries) => {
  let columns = [];
  let expression = '';

  queries.forEach((query, index) => {
    columns.push(query.name);

    const value = Array.isArray(query.value) ? query.value.join(' AND ') : query.value;
    if (index === 0) {
      expression += `${query.name} ${expression_translations[query.condition]} ${value} `;
    } else {
      if (query.condition === 'in_list') {
        expression += `AND ${query.name} ${expression_translations[query.condition]} (${value}) `;
      } else {
        expression += `AND ${query.name} ${expression_translations[query.condition]} ${value} `;
      }
    }
  });

  return `SELECT ${columns.join(', ')} FROM ${table_name} WHERE ${expression}`;
};

module.exports = SQLParser