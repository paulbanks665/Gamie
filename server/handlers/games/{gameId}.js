'use strict'

const db = require('../../resources/mysql');
const Boom = require('boom');

function findGame( gameId ) {
    const sql = 'Select * from game where id = ?';

    return db.pool().query( sql, gameId ).catch( err => {
      console.log(err);
    })
}

module.exports.get = ( request, h ) => {
    const game = findGame( request.params.gameId )[0];
    if ( !game ) { // Return 404
        return h.response(`error : Game with Id of ${request.params.gameId} not found in store.`).code(404);
    }

    return game;
}

module.exports.put = ( request, h ) => {
    const game = findGame( request.params.gameId )[0];
    if ( !game ) { // Return 404
        return h.response(`error : Game with Id of ${request.params.gameId} not found in store.`).code(404);
    }

    const sql = 'update game set name = ?, players = ? type = ? where id = ?';

    db.pool().query( sql, [ request.payload.name, request.payload.players, parseInt(request.payload.type), request.params.gameId] ).catch( (error, results, fields) => {
      if (error) console.log( error );
      console.log( 'deleted ' + results.affectedRows + ' rows' );
    })

    return game;
}

module.exports.delete = ( request, h ) => {
    const game = findGame( request.params.gameId )[0];
    if ( !game ) { // Return 404
        return h.response(`error : Game with Id of ${request.params.gameId} not found in store.`).code(404);
    }

    const sql = 'delete from game where id = ?';

    db.pool().query( sql, request.params.gameId ).catch( (error, results, fields) => {
      if (error) console.log( error );
      console.log( 'deleted ' + results.affectedRows + ' rows' );
    })

    return game;
}
