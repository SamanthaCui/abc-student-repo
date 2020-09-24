let button = window.document.getElementById("button");

let sw = screen.width;
let sh = screen.height;



function openWindow(){
  console.log("a new window should open");

  let randomx=Math.random()*(sw - 300);
  let randomy=Math.random()*(sh - 300);

  let newWindow=window.open('hello/index.html','','width=300,height=300,left ='+randomx+',top ='+randomy+'');
  let randomTime = 1000 + Math.random()*3000;
  setTimeout(function(){

    newWindow.close();

  },randomTime);

}


function openManyWindow(){
  for(let i = 0; i<5; i++){
    openWindow();
  }
}

button.addEventListener("click",openManyWindow);
