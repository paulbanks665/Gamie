'use strict';

module.exports = {
    sayHello:{
        handler: function(request, reply) {
            return reply('Hello World');
        }
    },
    sayGoodBye:{
        handler: function(request, reply) {
            return reply('Goodbye World');
        }
    }
}
