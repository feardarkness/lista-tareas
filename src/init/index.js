const express = require('express');
const allRoutes = require('../components');
const logger = require('../helpers/logger');
const middlewaresBefore = require('./middlewares/before');
const middlewaresAfter = require('./middlewares/after');

const app = express();

logger.info(`[${__filename}] *** Setting middlewares before routes ***`);
middlewaresBefore(app);

Object.keys(allRoutes).forEach((routeName) => {
  logger.info(`[${__filename}] *** Adding route -${routeName}- ***`);
  app.use(`/${routeName}`, allRoutes[routeName]);
});

logger.info(`[${__filename}] *** Setting middlewares after routes ***`);
middlewaresAfter(app);

module.exports = app;
