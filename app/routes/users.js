'use strict'

const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users')
const helper = require('../../helper');

router.get('/users',
    userCtrl.getUsers,
    helper.responseToJSON('users')
)

router.post('/users',
    userCtrl.isAdmin,
    userCtrl.getUsers,
    userCtrl.createUser,
    helper.responseToJSON('addUsers')
);

router.get('/userById/:userid',
    userCtrl.getUserById,
    helper.responseToJSON('users')
)
router.delete('/user/:userid',
    userCtrl.isAdmin,
    userCtrl.deleteOne,
    helper.responseToJSON('deleteUser')
);

router.put('/user/:userId',
    userCtrl.isAdmin,
    userCtrl.putUser,
    helper.responseToJSON('updateUser')
)

module.exports = router;