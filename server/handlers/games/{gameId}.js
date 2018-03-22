'use strict'

const db = require('../../resources/mysql');
const Boom = require('boom');

function findGame( gameId ) {
    const sql = 'Select * from game where id = ?';

    return db.pool().query( sql, gameId ).then( (rows) => {
            return rows[0];
        } ).catch( err => {
            console.log(err);
        })
}

module.exports.get = ( request, h ) => {
    const game = findGame( parseInt(request.params.gameId) );
    if ( !game ) { // Return 404
        return h.response(`error : Game with Id of ${request.params.gameId} not found in store.`).code(404);
    }

    return game;
}

module.exports.put = ( request, h ) => {
    const game = findGame( parseInt(request.params.gameId) );
    if ( !game ) { // Return 404
        return h.response(`error : Game with Id of ${request.params.gameId} not found in store.`).code(404);
    }

    const sql = 'update game set name = ?, players = ? type = ? where id = ?';

    return db.pool().query( sql, [ request.payload.name, parseInt(request.payload.players), request.payload.type, parseInt(request.params.gameId)] ).then( (results) => {
            console.log( 'updated ' + results.affectedRows + ' rows' );
            game.name = request.payload.name;
            game.players = parseInt(request.payload.players);
            game.type = request.payload.type;
            return game
        }).catch( (error) => {
            if (error) console.log( error );
        })
}

module.exports.delete = ( request, h ) => {
    const game = findGame( parseInt(request.params.gameId) );
    if ( !game ) { // Return 404
        return h.response(`error : Game with Id of ${request.params.gameId} not found in store.`).code(404);
    }

    const sql = 'delete from game where id = ?';

    return db.pool().query( sql, parseInt(request.params.gameId) ).then( (results) => {
        console.log( 'updated ' + results.affectedRows + ' rows' );
        return game
    }).catch( (error) => {
        if (error) console.log( error );
        console.log( 'deleted ' + results.affectedRows + ' rows' );
    })
}
