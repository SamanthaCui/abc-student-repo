console.log("it wordS");
let button = document.getElementById('button');
let secretInput = document.getElementById('secret');

button.addEventListener("click",()=>{
  let secret = secretInput.value;
  console.log("secret: ",secret);
  window.location.href = "/secret?word=" + secret;
})
