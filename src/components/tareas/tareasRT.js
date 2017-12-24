const router = require('express').Router();
const app = require('../../init');
const handlers = require('./tareasHandler');

router.get('', handlers.postHandler)
  .post('', handlers.getHandler)
  .patch('')
  .delete('');

app.use('/tareas', router);
