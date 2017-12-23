const express = require('express');
const configs = require('./src/configurations');

const app = express();

app.listen(configs.app.port);
