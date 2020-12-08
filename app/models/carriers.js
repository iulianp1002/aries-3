'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carrierSchema = new Schema ({
    name:{
        type: String,
        required: true,
        unique: true
    },
    color:{
        type: String,
        required: false,
        unique: false
    },
    speed:{
        type: Number,
        required: false,
        unique: false
    }
})

module.exports = mongoose.model('carrier',carrierSchema,'carriers')