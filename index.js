express = require('express');
body_parser= require('body-parser');
socket = require('socket.io');


app = express();

server = app.listen(8070, function(){
    console.log("Listening on port 8070");
})

app.use(express.static('public'));
socketio = socket(server);

socketio.on('connection',function(socket){
    console.log('Socket connection started');
    
    socket.on('chat',function(data){
        socketio.sockets.emit('chat',data);
    });

    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data);
    });
});

