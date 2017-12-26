const mongoose = require('mongoose');

const tarea = mongoose.model('Tarea', {
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
    enum: ['CREADO', 'FINALIZADO', 'ELIMINADO'],
    required: true,
    default: 'CREADO',
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
      required: true,
      default: Date.now,
    },
    usuario: {
      type: String,
      required: true,
    },
  },
});

module.exports.modelo = tarea;
