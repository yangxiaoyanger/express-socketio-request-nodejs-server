var socketio = {};
var socket_io = require('socket.io');

//获取io  
socketio.getSocketio = function(server){
    var io = socket_io.listen(server);
    io.on('connection', function(socket) {
        socket.on('hi', function(data) {
            console.log(data);
            socket.emit('c_hi', "hello too!");
        });

        socket.on('message', function(data) {
            console.log(data);
            socket.emit('message', "hello too!");
        })
    })
}; 
module.exports = socketio;  