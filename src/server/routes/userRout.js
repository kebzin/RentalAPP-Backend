const express = require('express');
const AddtUser = require('../controller/user-controller');
const router = express.Router();
const getAlluser = require('../controller/user-controller')
const UserUpdate = require('../controller/user-controller')

// get all user rout
router.get('/', getAlluser);
router.post('/', AddtUser);
router.post('/:id', UserUpdate);



module.exports = router