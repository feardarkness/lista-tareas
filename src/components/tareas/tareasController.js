const ErrorDeValidacion = require('../../errores/error-validacion');
const tareasBL = require('./tareasBL');
const errorHandler = require('../../helpers/error-handler');

const post = async (req, res) => {
  try {
    const esValido = await tareasBL.validarDatosPost(req.body);
    if (esValido !== true) {
      throw new ErrorDeValidacion(esValido, 10);
    }
    const tareaCreada = await tareasBL.crearTarea(req.body);
    res.json(tareaCreada);
  } catch (err) {
    errorHandler(res, err);
  }
};

const get = (req, res) => {
  res.json({ respuesta: 'get' });
};

const put = (req, res) => {
  res.json({ respuesta: 'put' });
};

const patch = (req, res) => {
  res.json({ respuesta: 'patch' });
};

const del = (req, res) => {
  res.json({ respuesta: 'delete' });
};

module.exports = {
  post,
  get,
  put,
  patch,
  del,
};
