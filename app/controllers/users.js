const isAdminVal = true;

const User = require('../models/Users');
module.exports = {
    isAdmin : isAdmin,
    getUsers: getUsers,
    putUser: putUser,
    createUser: createUser,
    getUserById: getUserById,
    deleteOne: deleteOne,
    responseToJSON: responseToJSON
};

function  isAdmin(req, res, next){
    if(isAdminVal){
        return next()
    }
    return res.send('unauthorized')
}

function getUsers(req, res, next){
    User.find({"details.role":req.query.role}, function(err,result) {
        if (err){
            return res.json(err)
        }
        req.resources.users = result;
        return next();
    })
}

function putUser(req, res, next){
    const updateUser = new User(req.body); 
    // updateUser.details ={
    //     age:req.body.age,
    //     role:req.body.role
    // }
    updateUser.details = JSON.parse(JSON.stringify(updateUser.details));
    updateUser.documents = JSON.parse(JSON.stringify(updateUser.documents))
    const user = new User(updateUser);
    delete user._id;
 
    User.updateOne({id: req.params.userId},
        user,
        function(err,result){
        if (err){
            console.log('err',err)
            return res.json(err)
        };

        req.resources.updateUser = result;
        return next();
    })
}


function deleteOne(req,res,next){
    User.deleteOne({_id:req.params.userid},function(err,result){
        if (err){
            return res.json(err);
        }
        req.resources.users = result;
        return next();
    })
}

function createUser(req,res,next){
    const addUser = new User(req.body);
    // addUser.details ={
    //     age:req.body.age,
    //     role:req.body.role
    // }
    addUser.details = JSON.parse(JSON.stringify(addUser.details));
    addUser.documents = JSON.parse(JSON.stringify(addUser.documents))
    const user = new User(addUser);
    user.save(function(err,result){
        if (err){
            console.log('err',err)
            return res.json(err)
        };

        req.resources.addUsers = result;
        return next();
    })
}

function getUserById(req, res, next){
    User.find({_id:req.params.userid},function(err,result){
        if (err){
            return res.json(err)
        }
       req.resources.users = result;
       return next();
    })
}

function responseToJSON(prop){
    return function (req,res,next){
        return res.json(req.resources[prop]);
    }
}