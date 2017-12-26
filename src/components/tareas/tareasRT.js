const router = require('express').Router();
const tareasController = require('./tareasController');

router.get('', tareasController.get)
  .post('', tareasController.post)
  .patch('', tareasController.patch)
  .delete('', tareasController.del);

module.exports = router;
