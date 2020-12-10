'use strict'

const express = require('express');
const app = express();
const config = require('./config/index');

const expressConfig = require('./config/express')
expressConfig.initExpress(app);

const routeConfig = require('./config/routes');
routeConfig.initRoutes(app);

require('./config/mongoose').initMongoose();

app.all('*',function(req,res,next){
    console.log()
    return res.status(404).json({
        status:'fail',
        message:`cant find ${req.url} on this server`
    })

});

app.use(function(err,req,res,next){
    console.log('- middle error -');
    return res.status(err && err.StatusCode || 400).json({
        status: err.StatusCode || 400,
        message:err && err.message || 'an error occured on save'
    })
})
app.listen(config.PORT, function (){
    console.log(`API on port ${config.PORT}`);
})