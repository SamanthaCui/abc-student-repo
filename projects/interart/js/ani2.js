let a = 0.0;
let s = 0.0;
let balls = [];

let count = 0;

function setup() {
  createCanvas(1000,1000);
  background(200,200,200);
  for (let i  = 0; i < 10; i ++){
  balls[i] = new Ball(400,400);
  }
}

function preload() {
  img = loadImage('../img/screenshot-1.png');
}

function draw() {
  a = a + 0.04;
  s = cos(a) * 2;

  count = count + 1;
  imagX = random(-100,width-10);
  imagY = random(-100,height-10);

  if (count % 5 == 0){
  translate(imagX, imagY);
  scale(s);
    noFill();
    strokeWeight(2,6);
  rect(0,0,random(30,200),random(30,200));
  }

  for (let i  = 0; i < 10; i ++){
  balls[i].move();
  balls[i].display();

  }
}


class Ball{
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
    image(img, 0,0, 64, 64);
    pop();
  }
}
