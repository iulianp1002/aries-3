const isAdminVal = true;

const User = require('../models/Users');
module.exports = {
    isAdmin : isAdmin,
    getUsers: getUsers,
    postUsers: postUsers,
    createUser: createUser,
    getUserById: getUserById,
    deleteOne: deleteOne,
    responseToJSON: responseToJSON
};

function  isAdmin(req,res,next){
    if(isAdminVal){
        return next()
    }
    return res.send('unauthorized')
}

function getUsers(req,res,next){
    console.log('get users')
    // return res.json({postUsers:true});
    User.find({"details.role":req.query.role},function(err,result){
        if (err){
            return res.json(err)
        }
        req.resources.users = result;
        return next();
        //return res.json(result);
    })
    //next();
}

function postUsers(req,res,next){
    console.log('get users,first',req.body);
    console.log('url form users',req.url);
    // User.update(_id:req.params[userid],function(err,result){

    // })
    req.resources.users = {test:1};
    // res.json({users:true});

   return next();
}

function deleteOne(req,res,next){
    User.deleteOne({_id:req.params.userid},function(err,result){
        if (err){
            return res.json(err);
        }
req.resources.users = result;
return next();
        //return res.json(err);
    })
}

function createUser(req,res,next){
    const addUser = new User(req.body);
    // addUser.details ={
    //     age:req.body.age,
    //     role:req.body.role
    // }
    addUser.details = JSON.parse(addUser.details);
    addUser.documents = JSON.parse(addUser.documents)
    const user = new User(addUser);
    user.save(function(err,result){
        if (err){
            console.log('err',err)
            return res.json(err)
        };

        //return res.json(result);
        req.resources.addUsers = result;
        return next();
    })
}

function getUserById(req,res,next){ console.log('req:',req.params.userid)
    User.find({_id:req.params.userid},function(err,result){
        if (err){
            return res.json(err)
        }
 console.log('result:',result)
       req.resources.users = result;
       return next();
    })
}

function responseToJSON(prop){
    return function (req,res,next){
       // console.log('res:',req.resources[prop])
        return res.json(req.resources[prop]);
    }
}