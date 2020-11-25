let express = require('express');
let app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected',socket.id);

  socket.on('disconnect', () => {
    console.log(socket.id,'user disconnected');
  });

  socket.on("message",(data)=>{
    console.log(data);
    io.emit("incoming",data);
  })
});




http.listen(3300, () => {
  console.log('listening on *:3000');
});
