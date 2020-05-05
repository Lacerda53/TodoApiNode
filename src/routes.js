const express = require('express');
const TodoController = require('./controllers/TodoController');

const routes = express.Router();


routes.get('/', TodoController.index);
routes.get('/:id', TodoController.details);
routes.post('/', TodoController.create);
routes.put('/:id', TodoController.update);
routes.patch('/:id', TodoController.update);
routes.delete('/:id', TodoController.delete);

module.exports = routes;