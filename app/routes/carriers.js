'use strict'
const express = require('express');
const helper = require('../../helper');

const router = express.Router();
const ctrl = require('../controllers/carriers')


router.get('/carriers',
    ctrl.getCarriers,
    helper.responseToJSON('carriers')
)

router.get('/carriersUsers',
    ctrl.getCarriersUsers,
    helper.responseToJSON('carriers')
)

router.post('/carriers',
    ctrl.getCarriers,
    ctrl.createCarrier,
    helper.responseToJSON('addCarriers')
);

router.get('/carrierById/:carrierid',
    ctrl.getCarrierById,
    helper.responseToJSON('carriers')
)
router.delete('/carrier',
    ctrl.deleteOne,
    helper.responseToJSON('carriers')
);

router.put('/carrier/:carrierId', 
    ctrl.putCarrier,
    helper.responseToJSON('updateCarrier')
)
module.exports = router;