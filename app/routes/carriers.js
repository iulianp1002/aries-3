'use strict'
const express = require('express');

const router = express.Router();
const ctrl = require('../controllers/carriers')


router.get('/carriers',
ctrl.getCarriers,
ctrl.responseToJSON('carriers')
)
router.post('/carriers',
ctrl.getCarriers,
ctrl.createCarrier,
ctrl.responseToJSON('addCarriers')
);

router.get('/carrierById/:carrierid',
ctrl.getCarrierById,
ctrl.responseToJSON('carriers')
)
router.delete('/carrier',
ctrl.deleteOne,
ctrl.responseToJSON('carriers')
);

// router.put('/carrier', 
// ctrl.isAdmin,
// ctrl.postUsers
// ,
// function(req,res,next){
//     console.log('put carrier')
//     return res.json({putCarriers:true});
// }
// )
module.exports = router;