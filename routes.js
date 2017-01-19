'use strict';
var krennick = require('./server/krennick.js');
var elasticSearch = require('./server/controller/elastic.js');
var home = require('./server/controller/home.js');
var assets = require('./server/controller/assets.js');

var registerRoutes = function(server) {

    var routes = [
        {method: 'GET', path: '/hello', config: krennick.sayHello },
        {method: 'GET', path: '/bye', config: krennick.sayGoodBye },
        {method: 'GET', path: '/searchMiniatureGames', config: elasticSearch.searchMiniatureGames},
        {method: 'GET', path: '/searchStarWars', config: elasticSearch.searchStarWarsGames},

        {method: 'GET', path: '/', config: home.index},
        {method: 'GET', path: '/css/{path*}', config: assets.css}
    ];



    server.route(routes);
}

module.exports = registerRoutes;
