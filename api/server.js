'use strict';
const os = require('os');
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

global.PORT = process.env.PORT || 5000;

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

//allow cors
app.use(cors(corsOptions));

// logging
app.use(morgan('tiny'));

// parse application/json
app.use(express.json({ extended: false }));

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// Default route to indicate app is running
app.get('/', (req, res) => res.send('Api server running...'));

app.listen(PORT, () =>
  console.log(
    `Server started on http://${os.hostname}:${PORT} or http://localhost:${PORT}`,
  ),
);
