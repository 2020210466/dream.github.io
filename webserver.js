var app = require("http").createServer();

var io = require("socket.io")(app);

var PORT = 8081;

app.listen(PORT);


io.on("connection", function (socket) {

/*app.js*/
socket.on('sendMessage',function(data){
    io.sockets.emit('receiveMessage',data)
})

});

console.log("websocket listening on port" + PORT);