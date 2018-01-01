const Validator = require('fastest-validator');
const db = require('../../init/databases');
const schemas = require('./schemas');

const validator = new Validator();

module.exports.validarDatosPost = (datos) => {
  const check = validator.compile(schemas.post);
  return check(datos);
};

/**
 * Permite crear una tarea y guardarla
 * @param  {Array} datos
 * @param  {String} datos.titulo
 * @param  {String} datos.descripcion
 * @throws {ValidationError}
 */
module.exports.crearTarea = async (datos) => {
  const tareas = await db.models.Tarea.find();
  return tareas;
};
