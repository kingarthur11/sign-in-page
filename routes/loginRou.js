const express = require('express');

const loginController = require('../controller/loginContr');

const router = express.Router();

router.get('/login', loginController.getLogin);

router.post('/login', loginController.postLogin);


exports.routes = router;
