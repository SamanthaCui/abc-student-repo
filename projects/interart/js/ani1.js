let a = 0.0;
let s = 0.0;
let count = 0;
let t = 0;


function setup() {
  createCanvas(1000,1000);
}

function preload() {
  img = loadImage('../img/screenshot-1.png');
}

function draw() {
  background(0);
  count = count + 1;

  if (count % 10 == 0){
  imagX = random(width/3,width * 2/3);
  imagY =random(height/3,height * 2/3);
  animate(imagX,imagY);
  }

  for (let x = 0; x <= width; x = x + 15) {
    for (let y = 0; y <= height; y = y + 15) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);

      // noFill();
      noStroke();
      fill(100,100,100);
      ellipse(myX, myY, 6); // draw particle
    }
  }

  t = t + 0.01;
}


function animate(x,y){

  // background(200,200,200);
   a = a + 0.04;
  s = cos(a) * 10;

  push();
  translate(x, y);
  scale(s);
  image(img,0, 0, 50, 50);
  pop();

}
