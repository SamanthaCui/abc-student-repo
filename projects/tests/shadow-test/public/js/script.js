// let button = window.document.getElementById("button");

let socket=io();
// let img = window.document.getElementById("image");
var w = window.innerWidth;
var h = window.innerHeight;
let positions = {};
// let popup = {};

let widthMouse = 500;
let heightMouse = 500;
let widthLight = 250;
let heightLight = 250;

let leftMouse = screen.width - widthLight - widthMouse;
let topMouse = screen.height/2 - heightMouse/1.9;
let leftLight = screen.width-widthLight/1.5;
let topLight = screen.height/2 - heightMouse/1.9 + heightMouse/2 - heightLight/2;

console.log(w,h);

//window popup
let mousePop=window.open('popup/index.html','','width='+widthMouse+',height='+heightMouse+',left ='+leftMouse+',top ='+topMouse);

mousePop.position = "fixed";

let lightPop=window.open('light/index.html','','width='+widthLight+',height='+heightLight+',left ='+leftLight+',top ='+topLight);


// let button = mousePop.document.getElementById("switch");
function changeMode(){
  let box = mousePop.document.getElementById("box");
  let lightbox = lightPop.document.getElementById("img");
  let button = mousePop.document.getElementById("switch");

  button.style.display = "none"
  box.style.backgroundColor = "white";
  lightbox.style.display = "block";
  document.body.style.backgroundColor = "white";
}


function openWindow1(){
  //getting mouse position from popup
  var x = event.clientX;
  var y = event.clientY;

  //saving popup mouse positions in an object
  let id = "hi";
  positions[id] = {};
  positions[id].x = x;
  positions[id].y = y;

  //sending the object to server
  socket.emit('mouse positions', positions);

}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}



let randomTime = 1000;

//getting mouse positions of pop window
setTimeout(function(){
  // mousePop.focus();
  let box = mousePop.document.getElementById("box");
  box.addEventListener("mousemove", openWindow1);

  let button = mousePop.document.getElementById("switch");
  button.addEventListener("click",changeMode);
},randomTime);




//get popup window position on screen
let screenPos = {};

var interval = setInterval(function(){
  xpos = lightPop.window.screenX;
  ypos = lightPop.window.screenY;

  let id = "hi";
  screenPos[id] = {};
  screenPos[id].x = xpos;
  screenPos[id].y = ypos;
  // console.log(screenPos);

  // let id = "pop";
  let lightbox = lightPop.document.getElementById("img");

  if(screenPos[id].x >= 1180){
    let angle = scale(screenPos[id].y, 20,560,-45,45);
    lightbox.animate([
      // keyframes
      { transform: 'rotate('+angle +'deg)'}
    ], {
      // timing options
      duration: 1000,
      iterations: 1,
      fill: 'forwards',
      origin: 'center'
    });
  }else if(screenPos[id].x > 860 &&  screenPos[id].y < 30){
    let angle = scale(screenPos[id].x, 860,1200,270,315);
    lightbox.animate([
      // keyframes
      { transform: 'rotate('+angle +'deg)'}
    ], {
      // timing options
      duration: 1000,
      iterations: 1,
      fill: 'forwards',
      origin: 'center'
    });

  }else if(screenPos[id].x > 860 &&  screenPos[id].y > 540 ){
    let angle = scale(screenPos[id].x, 1200,860,45,90);
    lightbox.animate([
      // keyframes
      { transform: 'rotate('+angle +'deg)'}
    ], {
      // timing options
      duration: 1000,
      iterations: 1,
      fill: 'forwards',
      origin: 'center'
    });
  }else if(screenPos[id].x > 550 &&  screenPos[id].y < 30 && screenPos[id].x <860){
    let angle = scale(screenPos[id].x,530,860,225,270);
    lightbox.animate([
      // keyframes
      { transform: 'rotate('+angle +'deg)'}
    ], {
      // timing options
      duration: 1000,
      iterations: 1,
      fill: 'forwards',
      origin: 'center'
    });
  }else if(screenPos[id].x > 550 &&  screenPos[id].y >540 && screenPos[id].x <860){
    let angle = scale(screenPos[id].x, 860,530,90,135,);
    lightbox.animate([
      // keyframes
      { transform: 'rotate('+angle +'deg)'}
    ], {
      // timing options
      duration: 1000,
      iterations: 1,
      fill: 'forwards',
      origin: 'center'
    });

  }else if(screenPos[id].x <550){
    let angle = scale(screenPos[id].y,560,20,135,225);
    lightbox.animate([
      // keyframes
      { transform: 'rotate('+angle +'deg)'}
    ], {
      // timing options
      duration: 1000,
      iterations: 1,
      fill: 'forwards',
      origin: 'center'
    });
  }
}, 500);

function display(x,y,img){

  console.log(screenPos);

  let xpos = scale(x, 0,500,0,w);
  let ypos = scale(y, 0,500,0,h);
  // let angle = scale(x, 0,500,0,360);

  //styling and animation of each cursor image
  let distance = widthMouse-x;

  let size = scale(distance, 0,widthMouse,50,200);

  let blurAmount = w - xpos;
  let amount = scale(blurAmount, 0,widthMouse,0,10);

  img.style.position="absolute";
  img.style.position="absolute";
  img.style.width=size+"px";
  img.style.height=size+"px";
  img.style.top=ypos+"px";
  img.style.left=xpos+"px";

  img.animate([
    // keyframes
    { filter: 'blur('+amount +'px)' }
  ], {
    // timing options
    duration: 1000,
    iterations: 1,
    fill: 'forwards'
  });


  let id = "hi";
  if(screenPos[id].x >= 1180){
    let angle = scale(screenPos[id].y, 20,560,225,315);
    img.animate([
      // keyframes
      { transform: 'rotate('+angle +'deg)'}
    ], {
      // timing options
      duration: 1000,
      iterations: 1,
      fill: 'forwards',
      origin: 'center'
    });
  }else if(screenPos[id].x > 860 &&  screenPos[id].y < 30){
    let angle = scale(screenPos[id].x, 860,1200,180,225);
    img.animate([
      // keyframes
      { transform: 'rotate('+angle +'deg)'}
    ], {
      // timing options
      duration: 1000,
      iterations: 1,
      fill: 'forwards',
      origin: 'center'
    });

  }else if(screenPos[id].x > 860 &&  screenPos[id].y > 540 ){
    let angle = scale(screenPos[id].x, 1200,860,315,360);
    img.animate([
      // keyframes
      { transform: 'rotate('+angle +'deg)'}
    ], {
      // timing options
      duration: 1000,
      iterations: 1,
      fill: 'forwards',
      origin: 'center'
    });
  }else if(screenPos[id].x > 550 &&  screenPos[id].y < 30 && screenPos[id].x <860){
    let angle = scale(screenPos[id].x,530,860,135,180);
    img.animate([
      // keyframes
      { transform: 'rotate('+angle +'deg)'}
    ], {
      // timing options
      duration: 1000,
      iterations: 1,
      fill: 'forwards',
      origin: 'center'
    });
  }else if(screenPos[id].x > 550 &&  screenPos[id].y >540 && screenPos[id].x <860){
    let angle = scale(screenPos[id].x, 860,530,0,45,);
    img.animate([
      // keyframes
      { transform: 'rotate('+angle +'deg)'}
    ], {
      // timing options
      duration: 1000,
      iterations: 1,
      fill: 'forwards',
      origin: 'center'
    });

  }else if(screenPos[id].x <550){
    let angle = scale(screenPos[id].y,560,20,45,135);
    img.animate([
      // keyframes
      { transform: 'rotate('+angle +'deg)'}
    ], {
      // timing options
      duration: 1000,
      iterations: 1,
      fill: 'forwards',
      origin: 'center'
    });
  }
}

//getting updated mouse positions from server
socket.on("mousePoses", (id,data)=>{
  //putting the key(id) names in an array
  let keys = Object.keys(data);

  //getting the updated positions of each object on the server
  for (let i = 0; i < keys.length; i ++){
    let name = keys[i];
    let xpos = data[name].x;
    let ypos = data[name].y;

    // checking if id imge exists, if not, create one with id name.
    var imageDiv = document.getElementById(name);
    if(imageDiv){
      // console.log("imageDiv exists");
    }else{
      let img = document.createElement('img');
      img.setAttribute("id", name);
      img.src = 'img/cursor.png';
      document.body.appendChild(img);
      // console.log(name," now exists");
    }

    //drawing cursor
    var cursor = document.getElementById(name);
    display(xpos,ypos,cursor);
  }

  // deleting id images that have been removed from server
  var allImages = document.querySelectorAll("img");
  for (let i = 0; i < allImages.length; i++) {
    let caller = allImages[i].id
    if (data[caller] == undefined){
      var disImage = document.getElementById(caller);
      disImage.remove();
    }
  }
});

//Close all popup windows when parent window is closed
window.onunload = function() {
  if (mousePop && !mousePop.closed) {
    mousePop.close();
  }
  if (lightPop && !lightPop.closed) {
    lightPop.close();
  }
};
