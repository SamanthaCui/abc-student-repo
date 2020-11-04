let mode = 0;
let a = 0.0;
let s = 0.0;
let count = 0;
let times = 0;
let myFont, fronReady = false;

function fontRead(){
  fronReady = true;
}

function preload() {
  img2 = loadImage('postcard.png');
  myFont = loadFont('../../Dawning_of_a_New_Day/DawningofaNewDay-Regular.ttf',fontRead);
}

function setup() {
  mycanvas = createCanvas(1000, 1000);
  background(255);

    mode = int(random(2,9));

  img = createImage(width, height);

  for (let i  = 0; i < 30; i ++){
    balls3[i] = new Ball3();
  }

  for (let i  = 0; i < 25; i ++){
    balls41[i] = new Ball41();
    balls42[i] = new Ball42();
  }

  side = 30;
  angle = 0;
  pos = p5.Vector.fromAngle(0);
  setRadius();

  x = 0;
 y = 0;
 px = x;
 py = y;
 strokeWeight(1);

 noStroke();
  for( var i = 0; i < 15; i ++) {
		for( var j = 0; j < 15; j ++) {
          balls7[i] = new Ball7();
   }
  }

  strokeWeight(1);
    var hyp = 10;
    var total = 100;
    var increment = TWO_PI / total;
    var branch = 0;
    for (var i = 0; i < TWO_PI; i += increment) {
        var vec1 = path(i);
        var vec2 = path(i + increment);
        var angle1 = atan2(vec2.y - vec1.y, vec2.x - vec1.x);
        wreath[branch] = [];
        seed(vec1, angle1, hyp, green, branch);
        branch++;
    }

    // for (let i  = 0; i < 10; i ++){
    // ballsd[i] = new Balld(400,400);
    // }

}

function setRadius() {
  var m = min(800,800);
  var radius = m/2-side*0.6;
  pos.setMag(radius);
}

function drawRect(pos) {
  push();
  translate(pos.x, pos.y);
  rotate(angle*10);
  // fill(random(255));
  stroke(0);
  strokeWeight(3);
  line(-side/2, -side/2, 0, 0);
  pop();
}

function draw() {

  img = createImage(width, height);
}

function Saveart(){
  // img = createImage(width, height);
  // delayTime(1.0);
  // erase();
  img = get();
  num = num + 1;
  let delayTime = 1.0 ;
 saveCanvas(mycanvas,"screenshot-" + num,"png");
 // erase();
 noLoop();
 clear();
 send();
}

function Saveart2(){
  times = times + 1;
  // img = createImage(width, height);
  img = get();
  num = num + 1;
 saveCanvas(mycanvas,"screenshot-" + num,"png");
 // erase();
 noLoop();
 clear();
}

function send(){
  // clear();
   // background(255);
   stroke(255);
   // image(img, 100, 300,50, 50);
   imageMode(CORNER);
   image(img2, -50, 0,1100,1100);

   image(img, 45, 310,500, 500);
   // image(img, 0, 0);

}

function myFunction() {
    times = times + 1;
  var person = prompt("Please enter your message");
  if (person != null) {
    let message = person ;
    // document.getElementById("demo").innerHTML =
    // "Hello " + person + "! How are you today?";
    fill(180, 3, 0);
    // fill(random(0,255),random(0,255),random(0,255))
    textSize(30);
    textFont(myFont);
    if (times == 1){
    text(message, 580, 490);

  }else{
    n = times - 1;
    text(message, 580, 490 + 45* n);
  }
  }
}
