const configs = require('./src/configurations');
const app = require('./src/init');
const logger = require('./src/helpers/logger');

const environment = process.env.NODE_ENV || 'development';

// iniciamos la aplicación cuando el ambiente no es test
if (environment !== 'test') {
  app.listen(configs.app.port, () => {
    logger.info(`[${__filename}|listen] App started, port ${configs.app.port}`);
  });
}

module.exports = app;
