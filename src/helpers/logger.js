const { createLogger, format, transports } = require('winston');

const environment = process.env.NODE_ENV || 'development';
const allTransports = [new transports.File({ filename: '../../logger/error.log', level: 'error' })];

if (environment === 'development') {
  allTransports.push(new transports.Console({}));
}

const logger = createLogger({
  level: 'info',
  format: format.json(),
  transports: allTransports,
});

logger.info(`[${__filename}] *** Logger configurado ***`);

module.exports = logger;
