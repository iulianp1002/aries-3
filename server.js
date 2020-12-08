'use strict'

const express = require('express');
const app = express();

const config = require('./config/index')

const expressConfig = require('./config/express')
expressConfig.initExpress(app);

const routeConfig = require('./config/routes');
routeConfig.initRoutes(app);

require('./config/mongoose').initMongoose();

app.listen(config.PORT, function (){
    console.log(`API on port ${config.PORT}`);
})