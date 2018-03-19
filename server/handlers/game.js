'use strict'

var game = {
  id: 14606,
  name: "Exploding Kittens",
  players: 5,
  type: "Card"
}

module.exports.get = (request, h) => {
    return game;
}