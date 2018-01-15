const ErrorDeValidacion = require('../errores/error-validacion');

module.exports = (res, err) => {
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
