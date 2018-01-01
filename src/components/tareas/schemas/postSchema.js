module.exports = {
  titulo: {
    type: 'string',
    empty: false,
    min: 5,
    max: 100,
  },
  descripcion: {
    type: 'string',
    empty: false,
    min: 20,
    max: 500,
  },
};
