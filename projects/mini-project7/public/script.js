console.log("hi");

let socket=io();
let pic = document.getElementById('bubble');
let face = document.getElementById('face');
let  background= document.getElementById('wrapper');

socket.on("user_number",(data)=>{
  // user_number.innerHTML=data;
  console.log(data);
  if (data <=7){
    pic.style.width = (179 * ((data-1) *0.2 + 1))+"px";
    pic.style.height = (130 * ((data-1) *0.2 + 1))+"px";
  }else if(data>7)
  {
    pic.style.display = "none";
    // face.style.display = "none";
  face.src = "img/boom.png";
    document.body.style.backgroundColor = "rgb(250, 194, 202)";
  }
})
