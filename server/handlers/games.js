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

    return db.pool().query('INSERT INTO game SET ?', game).then( (rows) => {
            console.log(rows.insertId);
            game.id = rows.insertId;
            return game;
        } ).catch( (error) => {
            if (error) throw error;
        });
}

