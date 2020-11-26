console.log("hi");
// function test() {
// blowing.play();
// }
//
// document.getElementById('buttonID').onclick = test;
// no () on test, otherwise it runs immediately.

let socket=io();
let pic = document.getElementById('bubble');
let face = document.getElementById('face');
let button = document.getElementById('buttonID');
let background= document.getElementById('wrapper');

pic.style.display = "none";
face.style.display = "none";

button.style.display = "block";

socket.on("user_number",(data)=>{

  // user_number.innerHTML=data;

  // alert("button was clicked");
  button.onclick = function() {
    blowing.play();
    console.log(data);
    if (data <=10){
      let scale = data *0.2 + 1;
      let scale2 = ((data-1) *0.2 + 1);

      document.getElementById("bubble").animate([
        // keyframes
        { transform: 'scale('+scale2 +')' },
        { transform: 'scale('+scale +')'}
      ], {
        // timing options
        duration: 1000,
        iterations: 1,
        fill: 'forwards'
      });

      // pic.style.width = (179 * ((data-1) *0.2 + 1))+"px";
      // pic.style.height = (130 * ((data-1) *0.2 + 1))+"px";

      pic.style.display = "block";
      face.style.display = "block";
      button.style.display = "none";
      blowing.play();
    }else if(data>10){
      blowing.pause();
      pop.play();
      button.style.display = "none";
      pic.style.display = "block";
      face.style.display = "block";
      face.src = "img/boom.png";

      document.getElementById("bubble").animate([
        // keyframes
        { transform: 'scale(1.4)'},
        { transform: 'scale(6)'}
      ], {
        // timing options
        duration: 3000,
        iterations: 1,
        fill: 'forwards'
      });

      document.getElementById("bubble").animate([
        // keyframes
        { opacity: '1'},
        { opacity: '0'}
      ], {
        // timing options
        duration: 1000,
        iterations: 1,
        fill: 'forwards'
      });

      document.body.animate([
        // keyframes
        { backgroundColor:'white'},
        { backgroundColor:'rgb(250, 194, 202)'}
      ], {
        // timing options
        duration: 1000,
        delay: 500,
        iterations: 1,
        fill: 'forwards'
      });

      // document.body.style.backgroundColor = "rgb(250, 194, 202)";
    }
  }
})
