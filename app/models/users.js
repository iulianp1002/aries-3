'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name:{
        type: String,
        required: true,
        unique: false
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    isActive:{
        type: Boolean,
        required : false
    },
    details:{
        age:{
            type: Number
        },
        role:{
            type:String
        }
    },
    documents:[
        {
            name:{
                type: String
            },
            doctype:{
                type: String
            }
    }
    ]
})

module.exports = mongoose.model('user',userSchema,'users')