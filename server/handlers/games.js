'use strict'

const dataStore = require( '../dataStore' );

module.exports.get = ( request, h ) => {
    return dataStore.games;
}
