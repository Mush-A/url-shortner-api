require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

// Parse form data
app.use(express.urlencoded({extended : false}))
// app.use(express.json())

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

const api = require('./routes/api.route');
app.use('/api', api);

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
