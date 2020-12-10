
const Carrier = require('../models/carriers');
module.exports = {
    getCarriers: getCarriers,
    putCarrier: putCarrier,
    createCarrier: createCarrier,
    getCarrierById: getCarrierById,
    deleteOne: deleteOne,
    getCarriersUsers: getCarriersUsers
};


function getCarriers(req, res, next){
    Carrier.find(function(err,result){
        if (err){
            return res.json(err)
        }
        req.resources.carriers = result;
        return next();     
    })
}

function putCarrier(req, res, next){
    Carrier.updateOne(
        {_id: req.params.carrierId},
        {name:req.body.name, color:req.body.color, speed:req.body.speed},
        function(err,result){
        if (err){
            console.log('err',err)
            return res.json(err)
        };

        req.resources.updateCarrier = result;
        return next();
    })
    
    next();
}

function deleteOne(req,res,next){
    User.deleteOne({_id:req.params.carrierid},function(err,result){
        if (err){
            return res.json(err);
        }
        req.resources.deleteCarrier = result;
        return next();
    })
}

function createCarrier(req,res,next){
    const carrier = new Carrier(req.body);
    carrier.save(function(err,result){
        if (err){
            return next(err);
        };

        req.resources.addCarriers = result;
        return next();
    })
}

function getCarrierById(req,res,next){
    Carrier.find({_id:req.params.carrierid}, function(err,rersult){
        if (err){
            return res.json(err)
        }

        req.resources.carriers = result;
        return next();
    })
}

function getCarriersUsers(req,res,next){
    Carrier
    .find()
    .sort({name:1}) // -1 desc
    .populate('user','name email details.age')
    .exec(function(err,result){
        if (err){
            return res.json(err)
        }
        
        req.resources.carriers = result;
        return next();
    })
    
}
