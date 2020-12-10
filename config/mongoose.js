'use strict'

const mongoose = require('mongoose');
const config = require('./index');

module.exports ={
    initMongoose:initMongoose
}

function initMongoose(){
    mongoose.connect(config.mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
}

const db = mongoose.connection;

db.on('error',function(err){
    console.log('error connecting to mongoDB:',err)
})

db.once('open',function(){
    console.log('connected to mongoDB')
})