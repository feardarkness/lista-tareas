const Validator = require('fastest-validator');
const tareasDAO = require('./tareasDAO');
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
  const check = validator.compile(schemas.tarea.post);
  return check(datos);
};

/**
 * Permite crear una tarea
 * @param  {Tarea} datos
 */
module.exports.crearTarea = async (datos) => {
  const tareas = await tareasDAO.almacenarTarea(datos);
  return tareas;
};
