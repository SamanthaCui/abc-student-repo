let button = window.document.getElementById("button");

// let sw = screen.width;
// let sh = screen.height;
//


function openMain(){

  let newWindow=window.open('main/index.html','','width=500,height=500,left =1000,top =0');
  let randomTime = 1000;
  setTimeout(function(){

    openWindow1();

  },randomTime);

  let randomTime1 = 73000;
  setTimeout(function(){

    newWindow.close();

  },randomTime1);



}

function openWindow1(){
  console.log("a new window should open");
  let newWindow=window.open('wheel1/index.html','','width=300,height=300,left =100,top =50');
  let randomTime = 3000;
  setTimeout(function(){
        myAudio.play();

    openWindow2();

  },randomTime);

  let randomTime1 = 72000;
  setTimeout(function(){

    newWindow.close();

  },randomTime1);



}
function openWindow2(){
  console.log("a new window should open");
  let newWindow=window.open('wheel2/index.html','','width=180,height=200,left =340,top =270');
  let randomTime = 3000;
  setTimeout(function(){

    openWindow3();

  },randomTime);

  let randomTime1 = 69000;
  setTimeout(function(){

    newWindow.close();

  },randomTime1);



}
function openWindow3(){
  console.log("a new window should open");
  let newWindow=window.open('wheel3/index.html','','width=280,height=280,left =155,top =400');
  let randomTime = 3000;
  setTimeout(function(){

    openWindow4();

  },randomTime);

  let randomTime1 = 66000;
  setTimeout(function(){

    newWindow.close();

  },randomTime1);



}
function openWindow4(){
  console.log("a new window should open");
  let newWindow=window.open('wheel4/index.html','','width=250,height=200,left =355,top =800');
  let randomTime = 3000;
  setTimeout(function(){

    openWindow5();

  },randomTime);

  let randomTime1 = 63000;
  setTimeout(function(){

    newWindow.close();

  },randomTime1);



}
function openWindow5(){
  console.log("a new window should open");
  let newWindow=window.open('wheel5/index.html','','width=100,height=100,left =530,top =600');

  let randomTime = 60000;
  setTimeout(function(){

    newWindow.close();
    myAudio.pause();

  },randomTime);


}


function openManyWindow(){
  openMain();
}
//
// function closeManyWindow(){
//   Window.close();
//
// }

button1.addEventListener("click",openManyWindow);
// button2.addEventListener("click",closeManyWindow);
