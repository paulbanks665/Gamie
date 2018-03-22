'use strict'

const dataStore = require( '../dataStore' );

module.exports.get = ( request, h ) => {
    return dataStore.games;
}

module.exports.post = ( request, h ) => {
    console.log( "Made it here" );
    const game = {
      id: dataStore.games.length + 1,
      name: request.body.name,
      players: parseInt( request.body.players ),
      type: request.body.type
    }

    dataStore.push( game );
    return game;
}

