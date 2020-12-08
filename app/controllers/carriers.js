
const Carrier = require('../models/carriers');
module.exports = {
    getCarriers: getCarriers,
    postCarrier: postCarrier,
    createCarrier: createCarrier,
    getCarrierById: getCarrierById,
    deleteOne: deleteOne,
    responseToJSON: responseToJSON
};


function getCarriers(req,res,next){
    console.log('get carriers')
    
    Carrier.find(function(err,result){
        if (err){
            return res.json(err)
        }
        req.resources.carriers = result;
        return next();
        
    })
}

function postCarrier(req,res,next){
    console.log('get users,first',req.body);
    console.log('url form users',req.url);
    req.resources.users = {test:1};
    
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
    User.find({_id:req.params['carrierid']},function(err,rersult){
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