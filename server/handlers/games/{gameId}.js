'use strict'

const dataStore = require( '../../dataStore' );

module.exports.get = ( request, h ) => {
    const game = dataStore.games.find( g => g.id === parseInt( request.params.gameId ) )
    if ( !game ) { // Return 404
        return h.response(`error : Game with Id of ${request.params.gameId} not found in store.`).code(404);
    }
    return game;
}

module.exports.put = ( request, h ) => {
    const game = dataStore.games.find( g => g.id === parseInt( request.params.gameId ) )
    if ( !game ) { // Return 404
        return h.response(`error : Game with Id of ${request.params.gameId} not found in store.`).code(404);
    }

    game.name = request.body.name,
    game.players = parseInt( request.body.players ),
    game.type = request.body.type

    return game;
}

module.exports.delete = ( request, h ) => {
    const game = dataStore.games.find( g => g.id === parseInt( request.params.gameId ) )
    if ( !game ) { // Return 404
        return h.response(`error : Game with Id of ${request.params.gameId} not found in store.`).code(404);
    }

    const index = dataStore.games.indexOf( game );
    dataStore.games.splice( index, 1 );

    return game;
}