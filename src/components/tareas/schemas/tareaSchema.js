module.exports.post = {
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

module.exports.getLista = {
  limite: {
    type: 'number',
    empty: false,
    min: 10,
    max: 50,
    integer: true,
    optional: true,
    convert: true,
  },
  intervalo: {
    type: 'number',
    empty: false,
    min: 0,
    integer: true,
    optional: true,
    convert: true,
  },
  orden: {
    type: 'string',
    empty: false,
    optional: true,
    pattern: /^(:?-?[a-z],?)+$/gi,
  },
};
