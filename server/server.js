const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const SQLParser = require('./sql_parser.js');
const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server started. Listening on port ${port}.`));

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.post('/api/v1/query', (req, res) => {
  const queries = req.body || [
    {
      name: 'user_first_name',
      type: 'string',
      condition: 'equals',
      value1: 'Steve',
      value2: ''
    },
    {
      name: 'user_last_name',
      type: 'string',
      condition: 'starts_with',
      value1: 'M',
      value2: ''
    }
  ];
  if (!queries || queries === null) res.status(400).json({ // bad request
    error: 'Must send queries to generate SQL Query.'
  });

  const query = SQLParser('session', queries);
  console.log('SQL Statement: ', query);
  res.status(200).send(query);
});