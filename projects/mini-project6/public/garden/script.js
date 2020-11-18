let lookButton = document.getElementById('look');
let giftInput = document.getElementById('gift');
let giftInput2 = document.getElementById('gift2');
let giftInput3 = document.getElementById('gift3');
let sendGift = document.getElementById('sendGift');
let garden = document.getElementById('garden');
let img = document.getElementById('emoji');


// img.innerHTML = gift

sendGift.addEventListener("click",()=>{
  console.log("dhdj");
  let gift = giftInput.value;
  let gift2 = giftInput2.value;
  let gift3 = giftInput3.value;
  fetch("/gift?gift=" + gift + "&gift2=" + gift2 + "&gift3=" + gift3);

  giftInput.value = "";
  giftInput2.value = "";
  giftInput3.value = "";
})

// function placeGift(gift){
//   console.log(gift);
//   let p = document.createElement('p');
//   p.innerHTML = gift;
//   p.style.position = "absolute";
//   p.style.height = '100px';
//    p.style.weight = '100px';
//   p.style.left = Math.random()*window.innerWidth+"px";
//   p.style.top = Math.random()*window.innerHeight+"px";
//   garden.appendChild(p);
// }
//
function placeGifts(gifts,gifts2,gifts3){
  garden.innerHTML='';
  for(i=0;i<gifts.length;i++){
    let emoji = gifts[i];
    let answer = gifts2[i];
    let hint = gifts3[i];
    wrap(emoji,answer,hint);
  }
}

function wrap(emoji,answer,hint){

  let p = document.createElement('div');
  // let box = document.createElement('div');
  p.innerHTML ="Emoji: " + emoji +"<br>" + "Answer: "+ answer +"<br>" + "Hint: '" +hint + "......' ";
  p.style.position = "absolute";
  p.style.backgroundColor = '#FCFF89';
  p.style.padding = '5px';
  p.style.height = '120px';
  p.style.width = '150px';
  p.style.left = Math.random()* (window.innerWidth - 150)+"px";
  p.style.top = Math.random()* (window.innerHeight- 120)+"px";
  p.style.border = "thick dashed #525252";
  garden.appendChild(p);
  // placeGift(box);
}


lookButton.addEventListener("click",()=>{
  console.log("getting gifts");
  fetch("/getGifts")
  // .then(decode)
  // .then(receivedAllGiftsForGarden);
  .then(data => data.json())
  .then(data => {
    console.log("decoded:",data);
    let gifts = data.content;
    let gifts2 = data.gifts2;
    let gifts3 = data.gifts3;
    placeGifts(gifts,gifts2,gifts3);
    // let firstGift = gifts[0];

  });
})
