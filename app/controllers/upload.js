'use strict'

const multer = require('multer');
const config = require('../../config/index');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../app/files'))
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now())
    }
});

module.exports = {
    storage: storage
};