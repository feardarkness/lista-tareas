const post = (req, res) => {
  res.json({ respuesta: 'post' });
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
