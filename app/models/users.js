'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    createdAt: Number,
    updatedAt: Number,
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
},
{
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: { currentTime: () => new Date().getTime()
}
  })

module.exports = mongoose.model('user',userSchema,'users')