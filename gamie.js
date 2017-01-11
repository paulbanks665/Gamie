'use strict';

var Hapi = require('hapi');

var server = new Hapi.Server();


server.connection({
    host: 'localhost',
    port: '8000'
});

require('./routes')(server);

server.start((err) => {
    if(err){
        throw err;
    }
  console.log('SANDBOX RUNNING AT : ', server.info.uri);
});
