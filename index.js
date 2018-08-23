// ---===---===---===---===---=== Global Variables ---===---===---===---===---===

const GLOBAL_VARS = {
    port    : 4000,
    version : '0.0.1 A'
};


// ---===---===---===---===---=== Importing the libraries ---===---===---===---===---===

const expressIMP = require('express');
const socketIMP = require('socket.io');
const fsIMP = require('fs');
const app = expressIMP();
const server = app.listen(, function(){
    console.log('Listening on port: ' + GLOBAL_VARS.port);
    console.log('Server is 100% Functional and ready to kick-ass!');
})

app.use(expressIMP.static('public'));
var io = socketIMP(server);


// ---===---===---===---===---=== Imoprting local files ---===---===---===---===---===

const importsFolder = __dirname + '/imports/';

// Object Encoding/Decoding, as well as formatting functions
var globalVariablesFile = "formats.js";
eval(fsIMP.readFileSync( importsFolder + globalVariablesFile)+'');

// ---===---===---===---===---=== Actions ---===---===---===---===---===


io.on('connection', function(socket) {
    console.log('New user connected ID: ' + socket.id);

    socket.on('chat', function(){
        // Chat();
    })

});

