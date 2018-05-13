const express = require('express');
require('dotenv').config()
const request = require('request')
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 5000;

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/api/zero-zero', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));