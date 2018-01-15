module.exports = class ErrorDeValidacion extends Error {
  constructor(errores, codigo) {
    super('Error de validación');
    this.errores = errores;
    this.name = this.constructor.name;
    this.codigoError = codigo;
    Error.captureStackTrace(this, this.constructor);
  }
};
