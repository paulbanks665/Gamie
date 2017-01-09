'use strict';
var krennick = require('./server/krennick.js');

var registerRoutes = function(server) {

    var routes = [
        {method: 'GET', path: '/hello', config: krennick.sayHello },
        {method: 'GET', path: '/bye', config: krennick.sayGoodBye }
    ];

    server.route(routes);
}

module.exports = registerRoutes;
