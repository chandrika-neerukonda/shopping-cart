const express = require('express');

const routes = express.Router();
const controller = require('../controllers/main');

routes.get('/add-user', controller.addUser);

routes.post('/add-user', controller.saveUser);


module.exports = routes;