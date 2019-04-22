const taskController = require('../../controllers/task.controller');
const router = require('express').Router();

module.exports = router
    .get('/', taskController.index)
    .get('/:id', taskController.show)
    .post('/new/', taskController.create)
    .put('/:id', taskController.update)
    .delete('/delete/:id', taskController.destroy);