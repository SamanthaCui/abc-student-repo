let screenPos = {};

var interval = setInterval(function(){
  xpos = window.screenX;
  ypos = window.screenY;

  let id = "hi";
  screenPos[id] = {};
  screenPos[id].x = xpos;
  screenPos[id].y = ypos;
  console.log(screenPos);
}, 500);
