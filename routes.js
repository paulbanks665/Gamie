'use strict';
var krennick = require('./server/krennick.js');
var elasticSearch = require('./server/controller/elastic.js');

var registerRoutes = function(server) {

    var routes = [
        {method: 'GET', path: '/hello', config: krennick.sayHello },
        {method: 'GET', path: '/bye', config: krennick.sayGoodBye },
        {method: 'GET', path: '/searchMiniatureGames', config: elasticSearch.searchMiniatureGames},
        {method: 'GET', path: '/searchStarWars', config: elasticSearch.searchStarWarsGames}
    ];



    server.route(routes);
}

module.exports = registerRoutes;
