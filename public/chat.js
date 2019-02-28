getelement = function(id)
{
    return document.getElementById(id);
}
var url = "http://localhost:8070"
var socket = io.connect(url);

var message = getelement("message");
var handle = getelement("handle");
var button = getelement("send");
var output = getelement("output");
var feedback = getelement("feedback");

button.addEventListener('click',function(){
    socket.emit('chat', {
        message:message.value,
        handle:handle.value
    });
});

message.addEventListener('keypress', function(){
    socket.emit('typing', handle.value);
});

socket.on('chat',function(data){
    output.innerHTML += "<p><strong>"+data.handle+":</strong>" +data.message+"</p>";
    feedback.innerHTML = "";

});

socket.on('typing',function(data){
    feedback.innerHTML = "<p><em>"+data+"is typing .. </em> </p>";
})
