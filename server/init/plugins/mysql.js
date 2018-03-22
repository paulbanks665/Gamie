'use strict'

const mysql = require('../../resources/mysql');
//TODO add logger to replace console logging.

const config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'gamie'
};

module.exports.plugin = {
    name: 'mysql',
    version: '1.0.0',
    register: async function (server, options) {
        mysql.init(config);
        console.log('init - Initalized mysql');
    }
};


