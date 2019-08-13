const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const SQLParser = require('./sql_parser.js');
const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server started. Listening on port ${port}.`));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/api/v1/query', (req, res) => {
  const queries = req.body.queries || [
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
  ];
  if (!queries || queries === null) res.status(400).json({ // bad request
    error: 'Must send queries to generate SQL Query.'
  });

  const query = SQLParser('session', queries);
  console.log(query);
  res.send(query);
});