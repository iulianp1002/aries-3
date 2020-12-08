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

router.put('/users', 
controllers.isAdmin,
controllers.postUsers
,
function(req,res,next){
    console.log('put users')
    return res.json({putUsers:true});
}
)
module.exports = router;