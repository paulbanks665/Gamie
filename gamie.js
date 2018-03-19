'use strict';


const Hapi = require('hapi');
const Path = require('path');

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

const init = async () => {
    await server.register({
        plugin: require('hapi-openapi'),
        options: {
            api: Path.join(__dirname, './specs/index.yaml'),
            handlers: Path.join(__dirname, './server/handlers'),
            docs: {path: '/_specs'},
            cors: {
              origin: ['*']
            }
        }
    });
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();