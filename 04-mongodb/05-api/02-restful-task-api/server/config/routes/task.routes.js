const taskController = require('../../controllers/task.controller');
const router = require('express').Router();

module.exports = router
    .get('/', taskController.index)
    .get('/:id', taskController.show)
    .post('/', taskController.create)
    .put('/:id', taskController.update)
    .delete('/:id', taskController.destroy);