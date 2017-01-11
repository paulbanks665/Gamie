'use strict';

var elClient = require('./connection.js');

elClient.cluster.health({}, function(err, resp, status) {
  console.log("-- CLIENT HEALTH --", resp);
})
