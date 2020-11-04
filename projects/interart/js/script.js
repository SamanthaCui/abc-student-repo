let mode;
let img;
let num = 0;


function setup() {
  mycanvas = createCanvas(1000, 1000);



  // x = mouseX;
  // y = mouseY;
  px = mouseX;
  py = mouseY;

  // background(0);
 strokeWeight(3);

  mode = int(random(0,2));

  // img = createImage(width, height);
}


function draw() {
  console.log();
  //
  // switch (mode) {
  //   case 0:
  //     scene0();
  //     break;
  //   case 1:
  //     scene1();
  //     break;
  // }
  // image( img, 0, 0, width/2, height/2);
}

function mouseDragged() {
  // background(0);

  switch (mode) {
    case 0:
      scene0();
      break;
    case 1:
      scene1();
      break;
  }



}



function scene0() {
  strokeWeight(random(3,6));
  stroke(55,139,41);
  // stroke(0);
  line(mouseX, mouseY, mouseX + random(-3,3), mouseY + random(-3,3));
  noStroke();
  fill(55,139,41);
  rect(mouseX, mouseY,10,10);
}

function scene1() {

   // x = random(-3, 3) + mouseX;
   // y = random(-3, 3) + mouseY;

strokeWeight(3);
  stroke(55,139,41);
  line(mouseX, mouseY,  px, py);

  px = random(-3, 3) + mouseX;
  py = random(-3, 3) + mouseY;

}

// function mousePressed() {
//   clear();
//   background(0);
// }

function keyPressed() {
  //   img = createImage(width, height);
  // img = get();
  // // image( img, 0, 0, width/2, height/2);
  // clear();
  // // mode = int(random(0,2));
  // noLoop();

  num = num + 1;
   saveCanvas(mycanvas,"screenshot-" + num,"png");
   noErase();
 }
