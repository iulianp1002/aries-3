'use strict'

const mongoose = require('mongoose');
const config = require('./index');

module.exports ={
    initMongoose:initMongoose
}

function initMongoose(){
    mongoose.connect(config.mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
}

// const db = mongoose.connection;

// db.on('error',function(param){
//     console.log('cone',param)
// })

// db.once('open',function(param){
//     console.log('connected',param)
// })