'use strict'

const _ = require('lodash');

module.exports.get = (request, reply) => {

    const pkg = _.get(request, 'server.app.pkg');

    reply({
        name: _.get(pkg, 'name'),
        version: _.get(pkg, 'version'),
        description: _.get(pkg, 'description')

    });

};