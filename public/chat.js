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


button.addEventListener('click',function(){
    socket.emit('chat', {
        message:message.value,
        handle:handle.value
    });
});

socket.on('chat',function(data){
    output.innerHTML += "<p><strong>"+data.handle+":</strong>" +data.message+"</p>";
})