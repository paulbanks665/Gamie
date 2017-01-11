'use strict';

var client = require('./connection.js');

client.indices.create({
  index: 'game'
}, function(err, resp, status) {
  if(err) {
    console.log('ERROR ', err);
  }
  else {
    console.log("CREATED ", resp);
  }
});

client.index({
  index: 'game',
  type: 'table',
  body: {
    "genre":"miniature",
    "brand":"star wars",
    "name":"X Wing"
  }
}, function(err, resp, status) {
  console.log('ADDED ' ,resp);
});

client.index({
  index: 'game',
  type: 'table',
  body: {
    "genre":"miniature",
    "brand":"star wars",
    "name":"Armada"
  }
}, function(err, resp, status) {
  console.log('ADDED ' ,resp);
});

client.index({
  index: 'game',
  type: 'table',
  body: {
    "genre":"rpg",
    "brand":"star wars",
    "name":"Edge Of The Empire"
  }
}, function(err, resp, status) {
  console.log('ADDED ' ,resp);
});

client.index({
  index: 'game',
  type: 'table',
  body: {
    "genre":"board",
    "brand":"star wars",
    "name":"Imperial Assault"
  }
}, function(err, resp, status) {
  console.log('ADDED ' ,resp);
});

client.index({
  index: 'game',
  type: 'table',
  body: {
    "genre":"miniature",
    "brand":"star wars",
    "name":"Galaxies"
  }
}, function(err, resp, status) {
  console.log('ADDED ' ,resp);
});
