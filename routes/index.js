const express = require('express');

const router = express.Router();

// const userController = require('../controllers/userController');
const homeController = require('../controllers/homeController');



// console.log("router loaded");
router.get('/',homeController.home)
router.use('/users',require('./users'))

module.exports = router;