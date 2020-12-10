'use strict'

const bodyParser = require('body-parser')

module.exports = {
    initExpress: initExpress
}

function initExpress(app){
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use(function(req,res,next){
    console.log('generic middleware: ', req.url);
    req.resources = req.resources || {};
    next();
})
//in spate da next
}