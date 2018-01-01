const bodyParser = require('body-parser');

module.exports = (app) => {
  app.set('json spaces', 2);
  app.use(bodyParser.json({ type: 'json' }));
};
