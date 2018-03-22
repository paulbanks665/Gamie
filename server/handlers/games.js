'use strict'

const db = require('../resources/mysql');
const Boom = require('boom');


module.exports.get = ( request, h ) => {
    const sql = 'Select * from game' 

    return db.pool().query( sql ).catch( err => {
      console.log(err);
    })
  }

module.exports.post = ( request, h ) => {
    const game = {
      name: request.payload.name,
      players: parseInt( request.payload.players ),
      type: request.payload.type
    }

    db.pool().query('INSERT INTO game SET ?', game, (error, results, fields) => {
        if (error) throw error;
        console.log(results.insertId);
        game.id = results.insertId;
      });

    return game;
}

