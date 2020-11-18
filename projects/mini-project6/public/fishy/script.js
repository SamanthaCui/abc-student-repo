console.log("fishy");
let button = document.getElementById('button');
let secretInput = document.getElementById('secret');
let hint = document.getElementById('clue');

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
//   hint.innerHTML = gifts3[item];
//
// })

button.addEventListener("click",()=>{
  let secret = secretInput.value;
  console.log("secret: ",secret);
  window.location.href = "/secret?word=" + secret;
})

fetch("/getRandomWord")
.then(data => data.json())
.then(data => {
  hint.innerHTML = data.sender + "......";
})
