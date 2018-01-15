const StateMachine = require('javascript-state-machine');

module.exports = (estado = 'creado') => {
  const estados = new StateMachine({
    init: estado,
    transitions: [
      { name: 'modificar', from: 'creado', to: 'creado' },
      { name: 'finalizar', from: 'creado', to: 'finalizado' },
      { name: 'eliminar', from: 'creado', to: 'inactivo' },
    ],
    methods: {
    },
  });
  return estados;
};
