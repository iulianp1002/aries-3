module.exports = {
    getDate:getDateFunc,
    responseToJSON: responseToJSON
};


function getDateFunc(){
    return `our date --${new Date()}`
}

function responseToJSON(prop){
    return function (req,res,next){
        return res.json(req.resources[prop]);
    }
}
