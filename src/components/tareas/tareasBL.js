const Validator = require('fastest-validator');
const tareasDAO = require('./tareasDAO');
const schemas = require('./schemas');

/**
 * @typedef {Object} Tarea
 * @property {String} titulo
 * @property {String} descripcion
 */

/**
 * Valida los datos de una tarea
 * @param  {Tarea} datos
 * @returns {Array} Returns an array with errors
 */
module.exports.validarDatosPost = (datos) => {
  const validator = new Validator();
  const check = validator.compile(schemas.tarea.post);
  return check(datos);
};

/**
 * @typedef {Object} GetParams
 * @property {String} limite
 * @property {String} intervalo
 * @property {String} orden
 */

/**
 * Valida los datos de una tarea
 * @param  {GetParams} datos
 * @returns {Array} Returns an array with errors
 */
module.exports.validarDatosListadoGet = (datos) => {
  const validator = new Validator();
  const check = validator.compile(schemas.tarea.getLista);
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
