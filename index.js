const configs = require('./src/configurations');
const app = require('./src/init');
const logger = require('./src/helpers/logger');

app.listen(configs.app.port, () => {
  logger.info(`[${__filename}|listen] Iniciando en el puerto ${configs.app.port}`);
});
