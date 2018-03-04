const ErrorDeValidacion = require('../../errores/error-validacion');
const tareasBL = require('./tareasBL');
const errorHandler = require('../../helpers/error-handler');

const post = async (req, res) => {
  try {
    const esValido = await tareasBL.validarDatosPost(req.body);
    if (esValido !== true) {
      throw new ErrorDeValidacion('Ha ocurrido un error al validar los parámetros enviados', 10, esValido);
    }
    const tareaCreada = await tareasBL.crearTarea(req.body);
    res.status(201).json(tareaCreada);
  } catch (err) {
    errorHandler(res, err);
  }
};

const get = async (req, res) => {
  try {
    const esValido = await tareasBL.validarDatosListadoGet(req.query);
    if (esValido !== true) {
      throw new ErrorDeValidacion('Ha ocurrido un error al validar los parámetros enviados', 10, esValido);
    }
    res.json({ respuesta: 'get' });
  } catch (err) {
    errorHandler(res, err);
  }
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
