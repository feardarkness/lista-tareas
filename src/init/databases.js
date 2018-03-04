const logger = require('../helpers/logger');
const mongoose = require('mongoose');
const models = require('../models');
const boot = require('./boot');

logger.info(`[${__filename}] *** Connecting to database and creating routes ***`);
const connection = mongoose.createConnection('mongodb://127.0.0.1/appTareas');
mongoose.Promise = Promise;

connection.on('connected', () => {
  logger.info(`[${__filename}] *** Connected to DB ***`);
  boot.iniciarAplicacion();
});

connection.on('error', (err) => {
  logger.error(`[${__filename}] *** Error connecting to DB ***`, {
    errorMessage: err.message,
    errorStack: err.stack,
  });
});

const cerrarConexion = () => {
  try {
    connection.close(() => {
      logger.info(`[${__filename}] *** Connection to DB closed ***`);
      process.exit(0);
    });
  } catch (err) {
    logger.error(`[${__filename}] `, { message: err.message, stackTrace: err.trace });
    process.exit(1);
  }
};

process.on('SIGINT', cerrarConexion).on('SIGTERM', cerrarConexion);

Object.keys(models).forEach((model) => {
  logger.info(`[${__filename}] *** Adding model -${models[model].nombre}- ***`);
  connection.model(models[model].nombre, models[model].esquema);
});

module.exports = connection;
