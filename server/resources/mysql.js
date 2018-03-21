'use strict'

const mysql = require('promise-mysql');

const internals = {};

module.exports.init = (config) => {
    internals.pool = mysql.createPool(config);
};

module.exports.pool = () => {
    return internals.pool;
};