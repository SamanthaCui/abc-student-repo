let express = require('express');
let app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
// const port = process.env.PORT;

let online = {};
let mousePos={};
let angleValue ={};

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
  // console.log("online", online)
  // console.log("-----")

  //getting mouse positions from popup,saving it in another object but with id names
  socket.on('mouse positions', (data)=>{
    mousePos[socket.id] = {};
    mousePos[socket.id].x = data.hi.x;
    mousePos[socket.id].y = data.hi.y;
    // console.log(data);

    //sending the positions obejct to each window with the names changed to each id
    io.emit("mousePoses",mousePos);
    socket.emit("mouseNAme",socket.id);
  });

  socket.on('ratate angles', (id,data)=>{
    console.log(id,data);
    angleValue[socket.id] = {};
    angleValue[socket.id].num = data[id].num;
    io.emit("allAngles",angleValue);
  });

  socket.on('disconnect', () => {
    // console.log(socket.id,'user disconnected');

    // delete entry from online
    delete mousePos[socket.id]
    delete angleValue[socket.id]
    // console.log("online", online)
    // console.log("-----")

    // tell everyone that this user disconnected
    io.emit("disconnected",socket.id);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
