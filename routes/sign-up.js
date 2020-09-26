const express = require('express');

const signController = require('../controller/signUpContr');

const router = express.Router();

router.get('/sign-up', signController.getSign);

router.post('/sign-up', signController.postSign);


exports.routes = router;
