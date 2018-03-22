'use strict';


const Hapi = require('hapi');
const Path = require('path');

const port = process.env.NODE_PORT || 3000;
const host = process.env.NODE_HOST || 'localhost';

const server = Hapi.server({
    port: port,
    host: host
});

const init = async () => {
    await server.register({
        plugin: require('hapi-openapi'),
        options: {
            api: Path.join(__dirname, './specs/index.yaml'),
            handlers: Path.join(__dirname, './server/handlers'),
            docs: {path: '/_specs'}
        }
    });

    await server.register({ 
        plugin: require('./server/init/plugins/mysql'),
        options: {}
    });
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);

    // The next line to to tell Pm2 that the server has been started.
    //process.send( 'ready' );
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

// This section of code is used to gracfully stop and reload the service when sent the signal by Pm2
process.on('SIGINT', () => {
    //db.stop( (err) => {
    //  process.exit(err ? 1 : 0);
    //});
});
 

init();