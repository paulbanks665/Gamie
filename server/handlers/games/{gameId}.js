'use strict'

const dataStore = require( '../../dataStore' );

module.exports.get = ( request, h ) => {
    const game = dataStore.games.find( g => g.id === parseInt( request.params.gameId ) )
    if ( !game ) { // Return 404
        return;
    }
    return game;
}

module.exports.put = ( request, h ) => {
    const game = dataStore.games.find( g => g.id === parseInt( request.params.gameId ) )
    if ( !game ) { // Return 404

    }
    return game;
}

module.exports.delete = ( request, h ) => {
    const game = dataStore.games.find( g => g.id === parseInt( request.params.gameId ) )
    if ( !game ) { // Return 404
        return;
    }
    return game;
}
