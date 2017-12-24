const postHandler = (req, res) => {
  res.json('post');
};

const getHandler = (req, res) => {
  res.json('sip');
};

module.exports = {
  postHandler,
  getHandler,
};
