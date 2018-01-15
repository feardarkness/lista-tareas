const Validator = require('fastest-validator');
const db = require('../../init/databases');
const schemas = require('./schemas');

/**
 * @typedef {Object} Tarea
 * @property {String} titulo
 * @property {String} descripcion
 */

const validator = new Validator();
/**
 * Valida los datos de una tarea
 * @param  {Tarea} datos
 * @returns {Array} Returns an array with errors
 */
module.exports.validarDatosPost = (datos) => {
  const check = validator.compile(schemas.post);
  return check(datos);
};

/**
 * Permite crear una tarea y guardarla
 * @param  {Tarea} datos
 * @throws {ValidationError}
 */
module.exports.crearTarea = async (datos) => {
  const tareas = await db.models.Tarea.find();
  return tareas;
};
