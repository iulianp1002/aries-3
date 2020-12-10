'use strict'

const path = require('path');

module.exports = {
    initRoutes: initRoutes
}

function initRoutes(app){
    const routesPath = path.join(__dirname,'../app/routes');
 const routes =['users','carriers'];

 routes.forEach(function(route){
     console.log("route", route);
     app.use('/api', require(`${routesPath}/${route}`))
 })
}

