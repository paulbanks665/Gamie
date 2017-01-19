'use strict';

var Hapi = require('hapi');
var swig = require('swig');

var server = new Hapi.Server();


server.connection({
    host: 'localhost',
    port: '8000'
});


server.views({
    engines: {
        html: swig
    },
    path: './server/views'
});

var options = {
    scripts: {
        css: [
        {
            position: 'head',
            href: '/css/main.css'
        }
        ]
    }
};

server.register({
    register: require('hapi-assets'),
    options: options
}, function (err) {
    if(err) {
        console.log('FAILED TO LOAD ASSETS');
    }
});

require('./routes')(server);




server.start((err) => {
    if(err){
        throw err;
    }
  console.log('SANDBOX RUNNING AT : ', server.info.uri);
});

module.exports = server;
