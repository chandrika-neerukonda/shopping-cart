const express = require('express');

const routes = express.Router();
const controller = require('../controllers/main');

routes.get('/', controller.getusers);


module.exports = routes;