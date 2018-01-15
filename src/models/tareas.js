const maquinaEstados = require('./states/tareas');

const estados = maquinaEstados().allStates();
const indice = estados.indexOf('none');

if (indice > -1) {
  estados.splice(indice, 1);
}

const tareaSchema = {
  titulo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  seguimiento: [{
    descripcion: String,
    fecha: Date,
    usuario: String,
  }],
  estado: {
    type: String,
    enum: estados,
    required: true,
  },
  creacion: {
    fecha: {
      type: Date,
      required: true,
      default: Date.now,
    },
    usuario: {
      type: String,
      required: true,
    },
  },
  modificacion: {
    fecha: {
      type: Date,
      default: Date.now,
    },
    usuario: {
      type: String,
    },
  },
};

module.exports.esquema = tareaSchema;
module.exports.nombre = 'Tareas';
