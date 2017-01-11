'use strict'

var elClient = require('../elastic/connection.js');

module.exports = {
  searchMiniatureGames:{
    handler: function(request, reply) {
      return reply( elClient.search({
        index: 'game',
        type: 'table',
        body: {
          query: {
            match: {"genre": "miniature"}
          },
        }
      }));
    }
  },
  searchStarWarsGames:{
    handler: function(request, reply) {
      return reply( elClient.search({
        index: 'game',
        type: 'table',
        body: {
          query: {
            match: {"brand": "star wars"}
          },
        }
      }));
    }
  }
}
