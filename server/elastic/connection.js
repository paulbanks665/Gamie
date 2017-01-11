'use strict'

var elasticSearch = require('elasticSearch');

var client = new elasticSearch.Client( {
  hosts: [
    'http://localhost:9200'
  ]
});

module.exports = client;
