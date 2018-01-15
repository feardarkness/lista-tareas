const ErrorDeValidacion = require('../errores/error-validacion');
const logger = require('../helpers/logger');

/**
 * Maneja los errores de la aplicación
 * @param  {Object} res Responde de Express
 * @param  {Object} err Error que se debe manejar
 */
module.exports = (res, err) => {
  logger.error(`[${__filename}] Error en la aplicación`, {
    message: err.message,
    errorStack: err.stack,
  });
  if (err instanceof ErrorDeValidacion) {
    return res.status(400).json({
      mensaje: err.message,
      errores: err.errores,
      codigo: err.codigoError,
    });
  }
  return res.status(500).json({
    mensaje: 'Ha ocurrido un error.',
    codigo: '0000',
  });
};
