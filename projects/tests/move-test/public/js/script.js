// let button = window.document.getElementById("button");

let socket=io();
// let img = window.document.getElementById("image");
var w = window.innerWidth;
var h = window.innerHeight;
let positions = {};
// let popup = {};

let widthMouse = 500;
let heightMouse = 500;
let widthLight = 200;
let heightLight = 250;

let leftMouse = screen.width - widthLight - widthMouse;
let topMouse = screen.height/2 - heightMouse/1.5;
let leftLight = screen.width-widthLight/1.5;
let topLight = screen.height/2 - heightMouse/1.5 + heightMouse/2 - heightLight/2;



console.log(w,h);

//window popup
let mousePop=window.open('popup/index.html','','width='+widthMouse+',height='+heightMouse+',left ='+leftMouse+',top ='+topMouse);

let lightPop=window.open('light/index.html','','width='+widthLight+',height='+heightLight+',left ='+leftLight+',top ='+topLight);

console.log(lightPop.screenX,lightPop.screen);


function openWindow1(){
  //getting mouse position from popup
  var x = event.clientX;
  var y = event.clientY;

  // let xpos = scale(x, 0,500,0,w);
  // let ypos = scale(y, 0,500,0,h);
  // console.log(x,y);

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
  let box = mousePop.document.getElementById("box");
  box.addEventListener("mousemove", openWindow1);
},randomTime);



function display(x,y,img){

  let xpos = scale(x, 0,500,0,w);
  let ypos = scale(y, 0,500,0,h);
  let angle = scale(x, 0,500,0,360);

  //styling and animation of each cursor image
  let distance = widthMouse-x;

  let size = scale(distance, 0,widthMouse,50,200);

  let blurAmount = w - xpos;
  let amount = scale(blurAmount, 0,widthMouse,0,7);

  img.style.position="absolute";
  img.style.position="absolute";
  img.style.width=size+"px";
  img.style.height=size+"px";
  img.style.top=ypos+"px";
  img.style.left=xpos+"px";

  img.animate([
    // keyframes
    { filter: 'blur('+amount +'px)' },
    { transform: 'rotate('+angle +'deg)'}
  ], {
    // timing options
    duration: 1000,
    iterations: 1,
    fill: 'forwards'
  });
}


function displayPop(x,y,img){
  img.style.position="absolute";
  img.style.position="absolute";
  img.style.width=30+"px";
  img.style.height=30+"px";
  img.style.top=y+"px";
  img.style.left=x+"px";

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

    // checking if id imge exists in popup, if not, create one with id name on popup window
    var imagePop = mousePop.document.getElementById(name);
    if(imagePop){
      console.log("imagePop exists");
    }else{
      let imgPop = mousePop.document.createElement('img');
      imgPop.setAttribute("id", name);
      imgPop.src = 'https://cdn0.iconfinder.com/data/icons/very-basic-android-l-lollipop-icon-pack/24/cursor-512.png';
      mousePop.document.body.appendChild(imgPop);
      console.log(name," now exists");
    }

    //drawing cursor
    var cursor = document.getElementById(name);
    var cursorPop = mousePop.document.getElementById(name);
    display(xpos,ypos,cursor);
    displayPop(xpos,ypos,cursorPop);
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

  // deleting id images that have been removed from popup
  var popImages = mousePop.document.querySelectorAll("img");
  for (let i = 0; i < popImages.length; i++) {
    let nonPop = popImages[i].id
    if (data[nonPop] == undefined){
      var disPop = mousePop.document.getElementById(nonPop);
      disPop.remove();
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
