/* eslint no-unused-vars: 0 */
const logger = require('../../helpers/logger');

module.exports = (app) => {
  app.use((req, res, next) => {
    logger.info(`[${__filename}|routeNotFound] route not found middleware`, { requestedUrl: req.originalUrl });
    res.status(404).json({
      message: 'route not found',
    });
  });

  app.use((err, req, res, next) => {
    logger.error(`[${__filename}|defaultErroHandler]`, {
      errorMessage: err.message,
      errorStack: err.message,
    });
    res.status(500).json({ error: 'unexpected error' });
  });
};
