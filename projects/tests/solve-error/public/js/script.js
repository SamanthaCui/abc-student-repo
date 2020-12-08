// let button = window.document.getElementById("button");

let socket=io();
// let img = window.document.getElementById("image");
var w = window.innerWidth;
var h = window.innerHeight;
let positions = {};
let names=[];
let myID=[];
let rotateAngle = {};
let newAngle = {};

let widthMouse = 500;
let heightMouse = 500;
let widthLight = 250;
let heightLight = 250;

let leftMouse = screen.width - widthLight - widthMouse;
let topMouse = screen.height/2 - heightMouse/1.9;
let leftLight = screen.width-widthLight/1.5;
let topLight = screen.height/2 - heightMouse/1.9 + heightMouse/2 - heightLight/2;
console.log(topMouse);

// console.log(w,h);

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
  box.addEventListener("mousemove", openWindow1);
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
  let button = mousePop.document.getElementById("switch");
  button.addEventListener("click",changeMode);
  // rotateMouse();
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
  rotateLight();
  // rotateMouse();
}, 500);

function rotateLight(){
  let id = "hi";
  let lightbox = lightPop.document.getElementById("img");

  let centerX = leftMouse + widthMouse/2;
  let centerY = topMouse + heightMouse/2;
  console.log(centerX,centerY);

  if(screenPos[id].x >= (centerX + widthMouse/2)){
    let angle = scale(screenPos[id].y, 0,(centerX + widthMouse/2),-45,45);
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
  }else if(screenPos[id].x > centerX &&  screenPos[id].y < (centerY - heightMouse/2)){
    let angle = scale(screenPos[id].x, centerX,(centerX + widthMouse/2),270,315);
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

  }else if(screenPos[id].x > centerX &&  screenPos[id].y > (centerY-heightMouse/3) ){
    let angle = scale(screenPos[id].x, (centerX + widthMouse/2),centerX,45,90);
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
  }else if(screenPos[id].x > (centerX-widthMouse/2) &&  screenPos[id].y < (centerY - heightMouse/2) && screenPos[id].x <centerX){
    let angle = scale(screenPos[id].x,(centerY+heightMouse/2),centerX,225,270);
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
  }else if(screenPos[id].x > (centerX-widthMouse/2) &&  screenPos[id].y >(centerY-heightMouse/3) && screenPos[id].x <centerX){
    let angle = scale(screenPos[id].x, centerX,(centerY+heightMouse/2),90,135,);
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

  }else if(screenPos[id].x <(centerX-widthMouse/2)){
    let angle = scale(screenPos[id].y,(centerY+heightMouse/2),0,135,225);
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
}


function rotateMouse(img){
  let id = "hi";
  let id2 = myID[0];
  rotateAngle[id2] = {};
  let angle;

  if(screenPos[id].x >= 1180){
    angle = scale(screenPos[id].y, 20,560,225,315);
    rotateAngle[id2].num = angle;
  }else if(screenPos[id].x > 860 &&  screenPos[id].y < 30){
    angle = scale(screenPos[id].x, 860,1200,180,225);
    rotateAngle[id2].num = angle;
  }else if(screenPos[id].x > 860 &&  screenPos[id].y > 540 ){
    angle = scale(screenPos[id].x, 1200,860,315,360);
    rotateAngle[id2].num = angle;
  }else if(screenPos[id].x > 550 &&  screenPos[id].y < 30 && screenPos[id].x <860){
    angle = scale(screenPos[id].x,530,860,135,180);
    rotateAngle[id2].num = angle;
  }else if(screenPos[id].x > 550 &&  screenPos[id].y >540 && screenPos[id].x <860){
    angle = scale(screenPos[id].x, 860,530,0,45,);
    rotateAngle[id2].num = angle;

  }
  else if(screenPos[id].x <550){
    angle = scale(screenPos[id].y,560,20,45,135);
    rotateAngle[id2].num = angle;
  }

  console.log(angle);
  console.log(rotateAngle);

  socket.emit('ratate angles', id2,rotateAngle);
};


function display(x,y,img){

  // console.log(screenPos);

  let xpos = scale(x, 0,500,0,w);
  let ypos = scale(y, 0,500,0,h);

  //styling and animation of each cursor image
  let distance = widthMouse-x;

  let size = scale(distance, 0,widthMouse,50,200);

  let blurAmount = w - xpos;
  let amount = scale(blurAmount, 0,widthMouse,0,10);

  img.style.position="absolute";
  // img.style.backgroundColor="red";
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

  // rotateMouse(img);
}

function imageRotate(angle,img){
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

function displayOthers(x,y,img){
  let xpos = scale(x, 0,500,0,w);
  let ypos = scale(y, 0,500,0,h);

  //styling and animation of each cursor image
  let distance = widthMouse-x;

  let size = scale(distance, 0,widthMouse,50,200);

  let blurAmount = w - xpos;
  let amount = scale(blurAmount, 0,widthMouse,0,10);

  img.style.position="absolute";
  // img.style.backgroundColor="yellow";
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
}

socket.on("mouseNAme", (data)=>{
  myID.push(data);
  // console.log(data);
})

socket.on("allAngles",(data)=>{
  let keys = Object.keys(data);
  for (let i = 0; i < keys.length; i ++){
    let id = keys[i];
    newAngle[id] = {};
    newAngle[id].num = data[id].num;
    // console.log(newAngle[id].num);
  }
});

function callDisplay(id,data,keys){
  var cursor = document.getElementById(id);
  display(data[id].x,data[id].y,cursor);
  rotateMouse();
  imageRotate(newAngle[id].num,cursor);

  for (let i = 0; i < keys.length; i ++){
    let calling = keys[i];
    var others = document.getElementById(calling);
    // console.log(data[calling]);
    displayOthers(data[calling].x,data[calling].y,others);
    imageRotate(newAngle[calling].num,others);
  }

}
//getting updated mouse positions from server
socket.on("mousePoses", (data)=>{
  // console.log(id);
  //putting the key(id) names in an array
  let keys = Object.keys(data);
  // rotateMouse();
  // console.log();
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
    }
  }
  let id = myID[0];
  let num = keys.indexOf(id);
  keys.splice(num,1);
  // console.log(keys);


  let randomTime = 100;

  //getting mouse positions of pop window
  setTimeout(function(){
    callDisplay(id,data,keys);
  },randomTime);

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
