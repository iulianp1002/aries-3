
const Carrier = require('../models/carriers');
module.exports = {
    getCarriers: getCarriers,
    putCarrier: putCarrier,
    createCarrier: createCarrier,
    getCarrierById: getCarrierById,
    deleteOne: deleteOne,
    responseToJSON: responseToJSON,
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
    User.deleteOne({_id:req.params["userid"]},function(err,result){
        if (err){
            return res.json(err);
        }
        req.resources.users = result;
        return next();
    })
}

function createCarrier(req,res,next){
    const user = new Carrier(req.body);
    user.save(function(err,result){
        if (err){
            console.log('err',err)
            return res.json(err)
        };

        req.resources.addCarriers = result;
        return next();
    })
}

function getCarrierById(req,res,next){
    User.find({_id:req.params['carrierid']}, function(err,rersult){
        if (err){
            return res.json(err)
        }

        req.resources.carriers = result;
        return next();
    })
}

function responseToJSON(prop){
    return function (req,res,next){
        return res.json(req.resources[prop]);
    }
}
function getCarriersUsers(req,res,next){ console.log('new route')
    Carrier
    .find()
    .populate('user','email')
    .exec(function(err,result){
        if (err){
            return res.json(err)
        }
        
        req.resources.carriers = result;
        return next();
    })
    
}
