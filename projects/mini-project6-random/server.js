
const express = require('express');
const app = express();
const port = process.env.PORT; //glitch: const port = process.env.PORT
// const port = 3009;
// const secret="blossom";

let gifts = ['🌕'];
let gifts2 = ['werewolf'];
let gifts3 = ['It is afraid of the full moon'];

// riddle dictionary
let riddles = {
  '🌕': {
    emoji: "🌕",
    answer: "fullmoon",
    hint: "It is afraid of the full moon"
  },
  '🍄': {
    emoji: "🍄",
    answer: "poisonous",
    hint: "...some mushrooms are..."
  }
}

let riddleArray = ['🌕','🍄'];



app.use(express.static('public'));

// let much = gifts.length;
// console.log(much);
//
// let number = much - 1;
// const secret=gifts2[number];
// console.log(number);


// let much = gifts.length;
// console.log(much);
// let number = Math.floor((Math.random() * much));
// const secret=gifts2[number];

app.get("/getRandomWord", (request, response) => {
  let randomPicker = Math.floor( Math.random() * riddleArray.length )
  let randomEmoji = riddleArray[randomPicker];
  console.log("sending", randomEmoji)

  // let much = gifts.length;
  // console.log(much);
  //
  // let number = much - 1;
  // const secret=gifts2[number];
  // console.log(number);
  // console.log(much);
  // const secret=gifts2[number];
  // let much = gifts.length;
  // console.log(much);
  // let number = Math.floor((Math.random() * much));
 // response.json({content:gifts,sender:gifts3,text:gifts2[number],subject:gifts2});
  response.json({riddle:randomEmoji});
})



// "/" route
app.get('/secret', (request, response) => {
  // let much = gifts.length;
  // console.log(much);
  //
  // let number = much - 1;
  // const secret=gifts2[number];
  // console.log(number);
  let query = request.query;
  console.log("someone made a guess:",query)
  let riddle = query.riddle;
  let guess = query.guess;

  let correctAnswer = riddles[riddle].answer

  if(guess == correctAnswer){
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
  let gift = query.gift; //emoji
  let gift2 = query.gift2;  //answer
  let gift3 = query.gift3;  //hint
  gifts.push(gift)
  gifts2.push(gift2)
  gifts3.push(gift3)
  // console.log("received:", gift);
  // console.log("all the things I have", gifts,gifts2,gifts3);
  // console.log("--------------");
})


app.get('/getGifts', (request, response) => {
  // let query = request.query;
  // let gift = query.gift;
  // gifts.push(gift)
  response.json({content:gifts,gifts2,gifts3,sender:"garden gods"});
  console.log("someone asked for gifts");
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
