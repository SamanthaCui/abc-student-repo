let express = require('express');
let app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
// const port = process.env.PORT;

let user_online=0;

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected',socket.id);
  // number.push(socket.id);
  user_online = user_online + 1;
  io.emit("user_number",user_online);

  socket.on('disconnect', () => {
    console.log(socket.id,'user disconnected');
    user_online = user_online - 1;
    io.emit("user_number",user_online);
  });
  console.log(user_online);
});




http.listen(3333, () => {
  console.log('listening on *:3000');
});
