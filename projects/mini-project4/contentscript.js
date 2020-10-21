// element.style.cursor = "url('http://bringerp.free.fr/Files/RotMG/cursor.gif'), auto";

let container = document.getElementById("bodyContent");



container.addEventListener("mousemove", (event)=>{

  window.addEventListener("scroll", (event) => {
      let scroll = this.scrollY;
  });
  // console.log(event.clientX)
  let x = event.clientX;
  let y = event.clientY+this.scrollY;
  console.log("drop at", x, y);

  disapper(x,y);
})



function disapper(xpos,ypos){

  let box = document.createElement('div');
  let ranW = 30;
  let ranH = 30;

  box.style.display = "block";
  box.style.position = "absolute";
  box.style.left = xpos-210+ "px";
  box.style.top = ypos-150+ "px";
  box.style.width = ranW + "px";
  box.style.height = ranH + "px";
  box.style.backgroundColor = "white";
  box.style.borderRadius = ranW/2+"px / "+(ranH/2)+"px";

  container.appendChild(box);


}
