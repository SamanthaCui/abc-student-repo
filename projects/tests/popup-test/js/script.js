// let button = window.document.getElementById("button");

let img = window.document.getElementById("image");
var w = window.innerWidth;
var h = window.innerHeight;

// const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
// const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);


let widthMouse = 500;
let heightMouse = 500;
let widthLight = 200;
let heightLight = 200;

let leftMouse = screen.width - widthLight - widthMouse;
let topMouse = screen.height/2 - heightMouse/1.5;
let leftLight = screen.width-widthLight/1.5;
let topLight = screen.height/2 - heightMouse/1.5 + heightMouse/2 - heightLight/2;

console.log(w,h);

let mousePop=window.open('popup/index.html','','width='+widthMouse+',height='+heightMouse+',left ='+leftMouse+',top ='+topMouse);

let lightPop=window.open('light/index.html','','width='+widthLight+',height='+heightLight+',left ='+leftLight+',top ='+topLight);


function openWindow1(){
  var x = event.clientX;
  var y = event.clientY;

  let distance = widthMouse-x;

  let xpos = scale(x, 0,620,0,w);
  let ypos = scale(y, 0,610,0,h);

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
    { filter: 'blur('+amount +'px)' },
    { filter: 'blur('+amount +'px)'}
  ], {
    // timing options
    duration: 1000,
    iterations: 1,
    fill: 'forwards'
  });

  console.log(x,y);
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


let randomTime = 1000;
setTimeout(function(){
  let box = mousePop.document.getElementById("box");

  box.addEventListener("mousemove", openWindow1);

},randomTime);
