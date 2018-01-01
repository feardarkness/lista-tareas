const logger = require('../helpers/logger');
require('./databases');
const configs = require('../configurations');
const app = require('./index');

const environment = process.env.NODE_ENV || 'development';

module.exports.iniciarAplicacion = () => {
  if (environment !== 'test') {
    app.listen(configs.app.port, () => {
      logger.info(`[${__filename}|listen] *** App started, port ${configs.app.port} ***`);
    });
  }
};

module.exports.iniciar = () => {
  logger.info(`[${__filename}|iniciar] *** Loading app ***`);
  return app;
};
