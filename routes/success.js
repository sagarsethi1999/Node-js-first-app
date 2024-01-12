const path = require('path')

const express = require('express');

const productsController = require('../controllers/contact')

const router = express.Router();

router.get('/success', productsController.success);

module.exports = router;