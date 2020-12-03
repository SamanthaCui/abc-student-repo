let express = require('express');
let app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
// const port = process.env.PORT;
let online = {};

let user_online=0;
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected',socket.id);
  online[socket.id] = {}
  online[socket.id].id = socket.id
  online[socket.id].x = -1000;
  online[socket.id].y = -1000;
  console.log("online", online)
  console.log("-----")



  // user_online = user_online + 1;
  // io.emit("user_number",socket.id);

  socket.on('disconnect', () => {
    console.log(socket.id,'user disconnected');
    // delete entry from online
    delete online[socket.id]
    console.log("online", online)
    console.log("-----")

    // tell everyone that this user disconnected
    io.emit("disconnected",socket.id);

    // user_online = user_online - 1;
    // io.emit("user_number",socket.id);
  });

  // console.log(user_online);


  socket.on("pos", (data)=>{
  console.log(data)
  io.emit("positions", data);

})
});






http.listen(3900, () => {
  console.log('listening on *:3000');
});
