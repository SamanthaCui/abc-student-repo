
const express = require('express');
const app = express();
const port = 3003; //glitch: const port = process.env.PORT
const secret="paper";

let gifts = [];

app.use(express.static('public'));

// "/" route
app.get('/secret', (request, response) => {
  let query = request.query;
  let guess = query.word;
  if(guess == secret){
    // response.sendFile(__dirname + "/public/garden/index.html");
    response.redirect('/garden');
  }else{
    // response.sendFile(__dirname + "/public/fishy/index.html");
    response.redirect('/fishy');
  }
  // console.log(" people are looking at this site!");
})


app.get('/gift', (request, response) => {
  let query = request.query;
  let gift = query.gift;
  gifts.push(gift)
  console.log("received:", gift);
  console.log("all the things I have", gifts);
  console.log("--------------");
})

app.get('/getGifts', (request, response) => {
  // let query = request.query;
  // let gift = query.gift;
  // gifts.push(gift)
  response.json({content:gifts,sender:"garden gods"});
  console.log("someone asked for gifts");
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
