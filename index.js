express = require('express');
body_parser= require('body-parser');
socket = require('socket.io');


app = express();

server = app.listen(8070, function(){
    console.log("app is up");
})

app.use(express.static('public'));
socketio = socket(server);

socketio.on('connection',function(socket){
    console.log('hamadasdassadasdsd done');
    
    socket.on('chat',function(data){
        socketio.sockets.emit('chat',data);
    });
});

