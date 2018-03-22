'use strict'

const dataStore = require( '../dataStore' );

module.exports.get = ( request, h ) => {
    return dataStore.games;
}

module.exports.post = ( request, h ) => {
    const game = {
      id: dataStore.games.length + 1,
      name: request.payload.name,
      players: parseInt( request.payload.players ),
      type: request.payload.type
    }

    dataStore.games.push( game );
    return game;
}

