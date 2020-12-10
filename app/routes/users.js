'use strict'

const express = require('express');
const router = express.Router();
const controllers = require('../controllers/users')


router.get('/users',
    controllers.getUsers,
    controllers.responseToJSON('users')
)
router.post('/users',
    controllers.getUsers,
    controllers.createUser,
    controllers.responseToJSON('addUsers')
);

router.get('/userById/:userid',
    controllers.getUserById,
    controllers.responseToJSON('users')
)
router.delete('/user',
    controllers.deleteOne,
    controllers.responseToJSON('users')
);

router.put('/user/:userId', 
    controllers.putUser,
    controllers.responseToJSON('updateUser')
)

module.exports = router;