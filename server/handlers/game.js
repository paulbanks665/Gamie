'use strict'

const mysql = require('../resources/mysql');
const Boom = require('boom');

var game = {
  id: 14606,
  name: "Exploding Kittens",
  players: 5,
  type: "Card"
}

module.exports.get = ( request, h ) => {
  let sql = 'Select * from game' 

  return mysql.pool().query(sql).catch( err => {
    console.log(err);
  })
}