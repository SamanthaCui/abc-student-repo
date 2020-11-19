console.log("it wordS");
let button = document.getElementById('button');
let secretInput = document.getElementById('secret');
let emoji = document.getElementById('emoji');
let riddle;

// fetch("/getRandomWord")
// .then(data => data.json())
// .then(data => {
//   // emoji.innerHTML = data.content;
//   let gifts = data.content;
//   let gifts2 = data.subject;
//   let gifts3 = data.sender;
//   let target = data.text;
//
//   let item = gifts2.indexOf(target);
//   console.log(item);
//
//   emoji.innerHTML = gifts[item];
//
// })

button.addEventListener("click",()=>{
  let secret = secretInput.value;

  console.log("secret: ",secret);
  window.location.href = "/secret?riddle="+riddle+"&guess="+secret;
})

fetch("/getRandomWord")
  .then(data => data.json())
  .then(data => {
    riddle = data.riddle;
    emoji.innerHTML = data.riddle;
})
