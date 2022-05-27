const express = require('express');
const {signup, getUser} = require('../controllers/userController');
const router = express.Router();

router.post('/signup', signup);
router.get('/', getUser);


module.exports = router;