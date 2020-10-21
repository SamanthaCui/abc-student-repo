let container = document.getElementById("bodyContent");

 container.style.cursor = 'none';

container.addEventListener("mousemove", (event)=>{
  let scroll = this.scrollY;
  let x = event.clientX;
  let y = event.clientY+this.scrollY;
  console.log("mouse at", x, y);

  let r = 255;
  let g = 255;
  let b = 255;
  disapper(x,y,r,g,b);


  container.addEventListener("click", (event)=>{

    let r = Math.random()*255;
    let g = Math.random()*255;
    let b = Math.random()*255;
    disapper(x,y,r,g,b);
  })
})

function disapper(xpos,ypos,R,G,B){

  let box = document.createElement('div');
  let ranW = 40;
  let ranH = 40;

  box.style.display = "block";
  box.style.position = "absolute";
  box.style.left = xpos-210+ "px";
  box.style.top = ypos-153+ "px";
  box.style.width = ranW + "px";
  box.style.height = ranH + "px";
  box.style.backgroundColor = "rgb("+R+","+G+","+B+")";
  box.style.borderRadius = ranW/2+"px / "+(ranH/2)+"px";

  container.appendChild(box);
}
