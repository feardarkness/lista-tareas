const moment = require('moment');
const db = require('../../init/databases');
const tareasEstados = require('../../models/states/tareas');

const { Tareas } = db.models;

/**
 * @typedef {Object} Tarea
 * @property {String} titulo
 * @property {String} descripcion
 */

/**
 * @typedef {Object} TareaCompleta
 * @property {String} titulo
 * @property {String} descripcion
 */

/**
 * Valida los datos de una tarea
 * @param  {Tarea} datos
 * @returns {TareaCompleta}
 */
module.exports.almacenarTarea = (datos) => {
  const tarea = new Tareas({
    titulo: datos.titulo,
    descripcion: datos.descripcion,
    seguimiento: [],
    estado: tareasEstados().state,
    creacion: {
      fecha: moment(),
      usuario: 'NombreUsuario',
    },
  });
  return tarea.save();
};
