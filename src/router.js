const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.index);
router.get('/:id', controller.get);
router.post('/', controller.create);
router.put('/', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;