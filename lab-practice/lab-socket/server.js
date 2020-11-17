
var app = require('express')();
//var startExpress = require('express');
//var app = startExpress();

//forming connection between websocket and http
var http = require('http').createServer(app);

var io = require("socket.io")(http);
//var startIO = require('socket.io');
//var app = startIO();

const port = 300;

//define a route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//evetlistener for new socket connections
io.on('connection', (socket) => {
  console.log('a user connected',socket.id);
  console.log("-------");
  socket.on('disconnect', () => {
    console.log(socket.id,'user disconnected');
  });
});

//listen on port 3000
http.listen(port, () => {
  console.log('listening on *:3000');
});
