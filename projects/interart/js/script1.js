let mode = 0;
let mode1 = 0;
let a = 0.0;
let s = 0.0;
let count = 0;
let times = 0;

let myFont, fronReady = false;

let a1 = 0.0;
let s1 = 0.0;
let count1 = 0;
let t1 = 0;

let ballsd = [];

let balls3 = [];

let balls41 = [];
let balls42 = [];

let balls11 = [];

var ball33;
var balls33 =[];

let bubbles = [];

let threshold = 30;
let ChangeX = 0;
let ChangeY = 0;
let ChangeT = 0;

let img;
let img2;
let img3;

var angle;
var pos;
var side;

let x, y;
let px, py;
let num = 0.1;

let balls7 = [];

var currentBranch = 0;
var wreath = [];

var Branch = function(vec1, vec2, red, green, blue, alpha) {
  this.vec1 = vec1;
  this.vec2 = vec2;
  this.alpha = alpha;
};

function fontRead(){
  fronReady = true;
}

function preload() {
  img2 = loadImage('postcard.png');

  myFont = loadFont('../Satisfy/Satisfy-Regular.ttf',fontRead);

  img3 = loadImage('../img/screenshot-1.png');

}

function setup() {
  mycanvas = createCanvas(1000, 1000);
  background(255);
  // textFont('Satisfy');

  mode = int(random(2,9));
  mode1 = int(random(1,3));

  img = createImage(width, height);

  for (let i  = 0; i < 30; i ++){
    balls3[i] = new Ball3();
  }

  for (let i  = 0; i < 25; i ++){
    balls41[i] = new Ball41();
    balls42[i] = new Ball42();
  }

  for (let i  = 0; i < 1; i ++){
  balls11[i] = new Ball11(400,400);
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
  //
  // for (let i = 0; i < 20; i++) {
  //   bubbles.push(new Bubble());
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
  stroke(166, 0, 0);
  strokeWeight(3);
  line(-side/2, -side/2, 0, 0);
  pop();
}

function draw() {

  switch (mode1) {
    case 1:
    drawing1();
    break;
    case 2:
    drawing2();
    break;
  }

  switch (mode) {
    case 1:
    ani1();
    break;
    case 2:
    ani2();
    break;
    case 3:
    ani3();
    break;
    case 4:
    ani4();
    break;
    case 5:
    ani5();
    break;
    case 6:
    ani6();
    break;
    case 7:
    ani7();
    break;
    case 8:
    ani8();
    break;
  }
  console.log(mode);

  // push();
  // translate(0,0);
  // image( img, 0, 0, width, height);
  // pop();

  img = createImage(width, height);
}

function Saveart(){
  img = createImage(width, height);
  // delayTime(1.0);
  // erase();
  img = get();
  num = num + 1;
  let delayTime = 1.0 ;
  // saveCanvas(mycanvas,"screenshot-" + num,"png");
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

// function mousePressed() {
//   img = get();
// }

// only display functions
function ani1() {
  background(255, 0, 0);
}

function ani2() {
  push();
  a = a + 0.04;
  s = cos(a) * 2;

  count = count + 1;
  imagX = random(-100,width-10);
  imagY = random(-100,height-10);

  if (count % 5 == 0){
    translate(imagX, imagY);
    scale(s);
    // image(img, imagX, imagY,random(30,200), random(30,200));
    // image(img,0, 0, 50, 50);
    noFill();
    stroke(166, 0, 0);
    strokeWeight(1);
    rect(0,0,random(60,200),random(60,200));
  }
  pop();
}

function ani3() {

  for (let i  = 0; i < 30; i ++){

    balls3[i].move();
    balls3[i].display();

  }
}

function ani4() {

  for (let i  = 0; i < 25; i ++){

    balls41[i].move();
    balls41[i].display();
    balls42[i].move();
    balls42[i].display();

  }
}

function ani5() {
  push();
  translate(width/2, height/2);
  for (let i = 0; i < 8; i++){
    drawRect(p5.Vector.mult(pos.rotate(TWO_PI/3), tan(angle)));

  }

  // console.log(pos, pos.rotate(TWO_PI/3), angle, tan(angle));


  // drawRect(p5.Vector.mult(pos.rotate(TWO_PI/3), tan(angle)));
  //   drawRect(p5.Vector.mult(pos.rotate(TWO_PI/3), tan(angle)));
  //   drawRect(p5.Vector.mult(pos.rotate(TWO_PI/3), tan(angle)));
  //   drawRect(p5.Vector.mult(pos.rotate(TWO_PI/3), tan(angle)));
  //   drawRect(p5.Vector.mult(pos.rotate(TWO_PI/3), tan(angle)));
  //   drawRect(p5.Vector.mult(pos.rotate(TWO_PI/3), tan(angle)));
  //   drawRect(p5.Vector.mult(pos.rotate(TWO_PI/3), tan(angle)));


  angle += 0.009;
  pos.rotate(-0.02);
  pop();
}

function ani6() {
  push();
  translate(width/2,height/2);
  Lines(1,1);
  Lines(-1,-1);
  Lines(-1,1);
  Lines(1,-1);
  pop();
}

function ani7() {
  push();
  for( var i = 0; i < 15; i ++) {
    for( var j = 0; j < 15; j ++) {
      balls7[i].display(10 + j, 10 + i);
    }
  }
  pop();
}

function ani8() {
  push();
  translate(width / 2, height / 2);
  if (currentBranch < wreath[0].length) {
    for (var i = 0; i < wreath.length; i++) {
      var b = wreath[i][currentBranch];
      strokeWeight(1);
      stroke(166, 0, 0, b.alpha);
      line(b.vec1.x, b.vec1.y, b.vec2.x, b.vec2.y);
    }
    currentBranch++;
  }
  pop();
}

class Ball3{
  constructor(){
    this.x = random(20,width) ;
    this.y = random(50,height) ;
    this.r = random(3,9);
    this.lifespan = 0;
  }
  move(){
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-1,1);
    this.r = this.r + random(-10,10);
    if (this.lifespan < 210){
      this.lifespan = this.lifespan + 10;
    }else if (this.lifespan = 200) {
      this.lifespan = 10;
    }
  }


  display(){
    stroke(166, 0, 0,this.lifespan);
    strokeWeight(1);
    // fill(255, 240, 77);
    noFill();
    ellipse(this.x,this.y,this.r,this.r);
  }
}

class Ball41{
  constructor(){
    this.x = random(20,width) ;
    this.y = random(0,height) ;
    this.r = random(3,6);
    this.lifespan = random(200,250);
  }
  move(){
    this.y = this.y + random(-1,5);
    this.r = this.r + random(-3,3);
    this.lifespan  -- ;

  }


  display(){
    stroke(166, 0, 0,this.lifespan);
    strokeWeight(1);
    noFill();
    ellipse(this.x,this.y,this.r,this.r);
  }
}

class Ball42{
  constructor(){
    this.x = random(20,width) ;
    this.y = random(0,height) ;
    this.r = random(3,9);
    this.lifespan = random(100,200);
  }
  move(){
    this.y = this.y + random(-5,1);
    this.r = this.r + random(-3,3);
    this.lifespan  -- ;

  }


  display(){
    stroke(166, 0, 0,this.lifespan);
    strokeWeight(1);
    noFill();
    ellipse(this.x,this.y,this.r,this.r);
  }
}

class Ball7{
  display(px,py){
    translate(width/2,height/2);
    rotate(frameCount * 0.01);
    fill(166, 0, 0, random(150,250));
    ellipse(0,0,3);
  }
}


function drawing1(){

  count1 = count1 + 1;

  if (count1 % 10 == 0){
  imagX = random(width/3,width * 2/3);
  imagY =random(height/3,height * 2/3);

  a1 = a1 + 0.04;
 s1 = cos(a1) * 10;

 push();
 translate(imagX,imagY);
 scale(s1);
 image(img3,0, 0, 30, 30);
 pop();
  }

}

function drawing2(){

  a = a + 0.04;
  s = cos(a) * 2;

  count = count + 1;
  // imagX = random(0,width-10);
  // imagY = random(0,height-10);
  push();
  if (count % 1000 == 0){
    // push();
  translate(imagX, imagY);
  scale(s);
    noFill();
    strokeWeight(2,6);
  // rect(0,0,random(30,200),random(30,200));
  image(img3,0, 0,random(30,200),random(30,200));
  }

  for (let i  = 0; i < 1; i ++){
  balls11[i].move();
  balls11[i].display();

  }
  pop();


}

// function drawing3(){
//   shootballs(1, touchX, touchY);
//     for (i=0; i<balls33.length; i++) {
//     var p = balls33[i];
//     p.display();
//     p.motion();
//   }
// }

// function drawing4(){
//   // background(255);
//   for (let i = 0; i < bubbles.length; i++) {
//     // background(255);
//     bubbles[i].move();
//     bubbles[i].bounce();
//     bubbles[i].display();
//   }
// }

class Ball11{
  constructor(x,y){
  this.x = x ;
  this.y = y;
  this.size = random(100,200);
  }
  move(){
    this.x = this.x + random(-10,10);
    this.y = this.y + random(-10,10);
  }


  display(){
    push();
    translate(this.x, this.y);
    image(img3, 0,0, 300,300);
    pop();
  }
}

// function ball33(x,y) {
  // this.positionX = x; // Xposition
	// this.positionY = y; // Yposition
	// this.shrink = 0.95; // make the image shrink and disappear
	// this.size = 1;
	// this.drag = 1;
  //
  //  this.motion = function() {
  //    this.speedX *= this.drag;
  //    this.speedY *= this.drag;
  //
  //    this.positionX += this.speedX ;
  //    this.positionY += this.speedY ;
  //
  //    this.size *= this.shrink; // size of the image
  //   };
  //
  //   this.display = function() {
  //
  //   ellipse(this.positionX, this.positionY, this.size);
	// };


// }

// class Bubble {
  // constructor() {
  //   this.x = random(width);
  //   this.y = random(height);
  //   this.diameter = random(150,200);
  //   this.xspeed = random(-4, 4);
  //   this.yspeed = random(-4, 4);
  //   this.oxspeed = this.xspeed;
  //   this.oyspeed = this.yspeed;
  //   this.direction = 0.7;
  // }
  //
  // move() {
  //   this.x += this.xspeed * this.direction;
  //   this.y += this.yspeed * this.direction;
  // }
  //
  // bounce() {
  //   if (this.x < 0) {
  //     this.x = 0;
  //     this.direction = -this.direction;
  //   } else if (this.y < 0) {
  //     this.y = 0;
  //     this.direction = -this.direction;
  //   } else if (this.x > width - 20) {
  //     this.x = width - 20;
  //     this.direction = -this.direction;
  //   } else if (this.y > height - 20) {
  //     this.y = height - 20;
  //     this.direction = -this.direction;
  //   }
  // }
  //
  // display() {
  //   // ellipse(this.x, this.y, this.diameter, this.diameter);
  //   // background(255);
  //   image(img3,this.x, this.y, this.diameter, this.diameter);
  // }
// }



// class Balld{
//   constructor(x,y){
//   this.x = x ;
//   this.y = y;
//   this.size = random(100,200);
//   }
//   move(){
//     this.x = this.x + random(-10,10);
//     this.y = this.y + random(-10,10);
//   }
//
//
//   display(){
//     push();
//     translate(this.x, this.y);
//     image(img, 0,0, 64, 64);
//     pop();
//   }
// }



function Lines(a,b){
  // translate(width/2,height/2);
  x = random(0,width/2) * num * a;
  y = random(0,height/2) * num * b;

  stroke(166, 0, 0);
  line(x, y, px, py);
  // ellipse(x,y,10,10);

  px = x + random(-1, 1);
  py = y + random(-1, 1);
  num = num + 0.001;


}


// function mousePressed() {
//   clear();
//   background(255);
// }

function path(t) {
  var x = sin(t) * 5;
  var y = cos(t) * 5;
  var v = createVector(x, y);
  return v;
}

function seed(v, a, h, green, branch) {
  var angle1 = a + random(-0.17 - h * 0.01, 0.17);
  var hyp = h * 0.97;
  var newX = v.x + cos(a) * h;
  var newY = v.y + sin(a) * h;
  var newV = createVector(newX, newY);
  var red = map(h, 4, -3, 250, 0);
  var blue = map(h, 4, -3, 0, 255);
  var alpha = map(h, 9.5, 0, 10, 255);
  var b = new Branch(v, newV, red, green, blue, alpha);
  wreath[branch].push(b);
  if (hyp > 0.3 && (round(hyp * 10) % 30) == 0) {
    seed(newV, angle1 + random(-0.1, 0.1), hyp, green, branch);
  }
  if (hyp > 0.3) {
    seed(newV, angle1, hyp, green, branch);
  }
}

function send(){
  // clear();
  // background(255);
  stroke(255);
  // image(img, 100, 300,50, 50);
  imageMode(CORNER);
  image(img2, -50, -60,1100,1100);

  image(img, 200, 120,600, 600);
  // image(img, 0, 0);
    // stop();

}

function myFunction() {
  times = times + 1;
  var person = prompt("Please enter your message");
  if (person != null) {
    let message = person ;
    fill(0);
    textSize(25);
    textAlign(CENTER);
    textFont(myFont);
    if (times == 1){
      text(message, 680, 790);

    }else{
      n = times - 1;
      text(message, 680, 790 + 45* n);
    }
  }
}
