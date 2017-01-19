'use strict'

module.exports = {
    index: {
        handler: function(request, reply) {
            console.log("HERE");
            var data = {
                page: {
                    title: 'HOME PAGE',
                    message: 'WELCOME TO THE HOME PAGE'
                }
            };
            console.log("RETURNING");
            reply.view('home/home2', data);
        }
    }
};