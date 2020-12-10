'use strict'
const express = require('express');
const { responseToJSON } = require('../controllers/carriers');

const router = express.Router();
const ctrl = require('../controllers/carriers')


router.get('/carriers',
ctrl.getCarriers,
ctrl.responseToJSON('carriers')
)

router.get('/carriersUsers',
ctrl.getCarriersUsers,
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

router.put('/carrier/:carrierId', 
ctrl.putCarrier,
responseToJSON('updateCarrier')
)
module.exports = router;