let container = document.getElementById("container")
var colors = ["#FEA3AA", "#F8B88B", "#FAF884", "#BAED91","#B2CEFE","#F2A2E8","#F7F6CF","#B6D8F2","#CCD4BF","#BEB4C5","#E6A57E","#9AD9DB","#98D4BB","#C47482","#DEC4D6","#DB93A5","#AAD9CD","#FFD9CF"];

container.addEventListener("click", (event)=>{
  // console.log(event.clientX)
  let x = event.clientX;
  let y = event.clientY;
  console.log("drop at", x, y);

  let colour = colors[Math.floor((Math.random() * 20))];

  let x1 = x + 150 * Math.random();
  let y1 = y +150* Math.random();

  let x2 = x - 150* Math.random();
  let y2 = y - 150* Math.random();

  let x3 = x + 150* Math.random();
  let y3 = y - 150* Math.random();

  let x4 = x + 200* Math.random();
  let y4 = y + 200* Math.random();

  drop(x, y,colour);
  drop1(x1, y1,colour);
  drop2(x2, y2,colour);
  drop1(x3, y3,colour);
  drop2(x4, y4,colour);
})



function drop(x, y,colour){
  let firstdrop = document.createElement('div');
  firstdrop.className = "drop1";

  let drop2 = document.createElement('div');
  drop2.className = "drop1";

  let drop3 = document.createElement('div');
  drop3.className = "drop1";

  let drop4 = document.createElement('div');
  drop4.className = "drop1";
  let drop5 = document.createElement('div');
  drop5.className = "drop1";
  let drop6 = document.createElement('div');
  drop6.className = "drop1";
  let drop7 = document.createElement('div');
  drop7.className = "drop1";
  let drop8 = document.createElement('div');
  drop8.className = "drop1";

  let ranW = 50 + Math.random()*10;
  let ranH = 50 + Math.random()*10;

  // let colour = colors[Math.floor((Math.random() * 20))];


  firstdrop.style.left = x+8-(ranW/2) + "px";
  firstdrop.style.top = y+30-(ranH/2)+ "px";
  firstdrop.style.width = ranW + "px";
  firstdrop.style.height = ranH + "px";
  firstdrop.style.backgroundColor = colour;
  firstdrop.style.borderRadius = ranW/2+"px / "+(ranH/2)+"px";


  container.appendChild(firstdrop);

  drop2.style.left = x+5-(ranW*1.4/2) + "px";
  drop2.style.top = y+30-(ranH*1.4/2)+ "px";
  drop2.style.width = ranW*1.4 + "px";
  drop2.style.height = ranH*1.4 + "px";
  drop2.style.backgroundColor = colour;
  drop2.style.borderRadius = ranW*1.4/2+"px / "+(ranH*1.4/2)+"px";
  drop2.style.opacity = 0.7;

  container.appendChild(drop2);


  drop3.style.left = x+5-(ranW*1.8/2) + "px";
  drop3.style.top = y+30-(ranH*1.8/2)+ "px";
  drop3.style.width = ranW*1.8 + "px";
  drop3.style.height = ranH*1.8 + "px";
  drop3.style.backgroundColor = colour;
  drop3.style.borderRadius = ranW*1.8/2+"px / "+(ranH*1.8/2)+"px";
  drop3.style.opacity = 0.65;

  container.appendChild(drop3);

  drop4.style.left = x+5-(ranW*2.3/2) + "px";
  drop4.style.top = y+30-(ranH*2.3/2)+ "px";
  drop4.style.width = ranW*2.3 + "px";
  drop4.style.height = ranH*2.3 + "px";
  drop4.style.backgroundColor = colour;
  drop4.style.borderRadius = ranW*2.3/2+"px / "+(ranH*2.3/2)+"px";
  drop4.style.opacity = 0.6;

  container.appendChild(drop4);

  drop5.style.left = x+5-(ranW*2.7/2) + "px";
  drop5.style.top = y+30-(ranH*2.7/2)+ "px";
  drop5.style.width = ranW*2.7 + "px";
  drop5.style.height = ranH*2.7 + "px";
  drop5.style.backgroundColor = colour;
  drop5.style.borderRadius = ranW*2.7/2+"px / "+(ranH*2.7/2)+"px";
  drop5.style.opacity = 0.55;

  container.appendChild(drop5);

  drop6.style.left = x+5-(ranW*4/2) + "px";
  drop6.style.top = y+30-(ranH*4/2)+ "px";
  drop6.style.width = ranW*4 + "px";
  drop6.style.height = ranH*4 + "px";
  drop6.style.backgroundColor = colour;
  drop6.style.borderRadius = ranW*4/2+"px / "+(ranH*4/2)+"px";
  drop6.style.opacity = 0.4;

  container.appendChild(drop6);

  drop7.style.left = x+5-(ranW*5/2) + "px";
  drop7.style.top = y+30-(ranH*5/2)+ "px";
  drop7.style.width = ranW*5 + "px";
  drop7.style.height = ranH*5 + "px";
  drop7.style.backgroundColor = colour;
  drop7.style.borderRadius = ranW*5/2+"px / "+(ranH*5/2)+"px";
  drop7.style.opacity = 0.3;

  container.appendChild(drop7);

  drop8.style.left = x+5-(ranW*6/2) + "px";
  drop8.style.top = y+30-(ranH*6/2)+ "px";
  drop8.style.width = ranW*6 + "px";
  drop8.style.height = ranH*6 + "px";
  drop8.style.backgroundColor = colour;
  drop8.style.borderRadius = ranW*6/2+"px / "+(ranH*6/2)+"px";
  drop8.style.opacity = 0.2;

  container.appendChild(drop8);


}

function drop1(x, y,colour){
  let firstdrop = document.createElement('div');
  firstdrop.className = "drop2";

  let drop2 = document.createElement('div');
  drop2.className = "drop2";

  let drop3 = document.createElement('div');
  drop3.className = "drop2";

  let drop4 = document.createElement('div');
  drop4.className = "drop2";
  let drop5 = document.createElement('div');
  drop5.className = "drop2";
  let drop6 = document.createElement('div');
  drop6.className = "drop2";
  let drop7 = document.createElement('div');
  drop7.className = "drop2";
  let drop8 = document.createElement('div');
  drop8.className = "drop2";

  let ranW = 20 + Math.random()*10;
  let ranH = 20 + Math.random()*10;

  // let colour = colors[Math.floor((Math.random() * 20))];


  firstdrop.style.left = x+8-(ranW/2) + "px";
  firstdrop.style.top = y+30-(ranH/2)+ "px";
  firstdrop.style.width = ranW + "px";
  firstdrop.style.height = ranH + "px";
  firstdrop.style.backgroundColor = colour;
  firstdrop.style.borderRadius = ranW/2+"px / "+(ranH/2)+"px";


  container.appendChild(firstdrop);

  drop2.style.left = x+5-(ranW*1.4/2) + "px";
  drop2.style.top = y+30-(ranH*1.4/2)+ "px";
  drop2.style.width = ranW*1.4 + "px";
  drop2.style.height = ranH*1.4 + "px";
  drop2.style.backgroundColor = colour;
  drop2.style.borderRadius = ranW*1.4/2+"px / "+(ranH*1.4/2)+"px";
  drop2.style.opacity = 0.7;

  container.appendChild(drop2);


  drop3.style.left = x+5-(ranW*1.8/2) + "px";
  drop3.style.top = y+30-(ranH*1.8/2)+ "px";
  drop3.style.width = ranW*1.8 + "px";
  drop3.style.height = ranH*1.8 + "px";
  drop3.style.backgroundColor = colour;
  drop3.style.borderRadius = ranW*1.8/2+"px / "+(ranH*1.8/2)+"px";
  drop3.style.opacity = 0.65;

  container.appendChild(drop3);

  drop4.style.left = x+5-(ranW*2.3/2) + "px";
  drop4.style.top = y+30-(ranH*2.3/2)+ "px";
  drop4.style.width = ranW*2.3 + "px";
  drop4.style.height = ranH*2.3 + "px";
  drop4.style.backgroundColor = colour;
  drop4.style.borderRadius = ranW*2.3/2+"px / "+(ranH*2.3/2)+"px";
  drop4.style.opacity = 0.6;

  container.appendChild(drop4);

  drop5.style.left = x+5-(ranW*2.7/2) + "px";
  drop5.style.top = y+30-(ranH*2.7/2)+ "px";
  drop5.style.width = ranW*2.7 + "px";
  drop5.style.height = ranH*2.7 + "px";
  drop5.style.backgroundColor = colour;
  drop5.style.borderRadius = ranW*2.7/2+"px / "+(ranH*2.7/2)+"px";
  drop5.style.opacity = 0.55;

  container.appendChild(drop5);

  drop6.style.left = x+5-(ranW*4/2) + "px";
  drop6.style.top = y+30-(ranH*4/2)+ "px";
  drop6.style.width = ranW*4 + "px";
  drop6.style.height = ranH*4 + "px";
  drop6.style.backgroundColor = colour;
  drop6.style.borderRadius = ranW*4/2+"px / "+(ranH*4/2)+"px";
  drop6.style.opacity = 0.4;

  container.appendChild(drop6);

  drop7.style.left = x+5-(ranW*5/2) + "px";
  drop7.style.top = y+30-(ranH*5/2)+ "px";
  drop7.style.width = ranW*5 + "px";
  drop7.style.height = ranH*5 + "px";
  drop7.style.backgroundColor = colour;
  drop7.style.borderRadius = ranW*5/2+"px / "+(ranH*5/2)+"px";
  drop7.style.opacity = 0.3;

  container.appendChild(drop7);

  drop8.style.left = x+5-(ranW*6/2) + "px";
  drop8.style.top = y+30-(ranH*6/2)+ "px";
  drop8.style.width = ranW*6 + "px";
  drop8.style.height = ranH*6 + "px";
  drop8.style.backgroundColor = colour;
  drop8.style.borderRadius = ranW*6/2+"px / "+(ranH*6/2)+"px";
  drop8.style.opacity = 0.2;

  container.appendChild(drop8);


}

function drop2(x, y,colour){
  let firstdrop = document.createElement('div');
  firstdrop.className = "drop3";

  let drop2 = document.createElement('div');
  drop2.className = "drop3";

  let drop3 = document.createElement('div');
  drop3.className = "drop3";

  let drop4 = document.createElement('div');
  drop4.className = "drop3";
  let drop5 = document.createElement('div');
  drop5.className = "drop3";
  let drop6 = document.createElement('div');
  drop6.className = "drop3";
  let drop7 = document.createElement('div');
  drop7.className = "drop3";
  let drop8 = document.createElement('div');
  drop8.className = "drop3";

  let ranW = 10 + Math.random()*10;
  let ranH = 10 + Math.random()*10;

  // let colour = colors[Math.floor((Math.random() * 20))];


  firstdrop.style.left = x+8-(ranW/2) + "px";
  firstdrop.style.top = y+30-(ranH/2)+ "px";
  firstdrop.style.width = ranW + "px";
  firstdrop.style.height = ranH + "px";
  firstdrop.style.backgroundColor = colour;
  firstdrop.style.borderRadius = ranW/2+"px / "+(ranH/2)+"px";


  container.appendChild(firstdrop);

  drop2.style.left = x+5-(ranW*1.4/2) + "px";
  drop2.style.top = y+30-(ranH*1.4/2)+ "px";
  drop2.style.width = ranW*1.4 + "px";
  drop2.style.height = ranH*1.4 + "px";
  drop2.style.backgroundColor = colour;
  drop2.style.borderRadius = ranW*1.4/2+"px / "+(ranH*1.4/2)+"px";
  drop2.style.opacity = 0.7;

  container.appendChild(drop2);


  drop3.style.left = x+5-(ranW*1.8/2) + "px";
  drop3.style.top = y+30-(ranH*1.8/2)+ "px";
  drop3.style.width = ranW*1.8 + "px";
  drop3.style.height = ranH*1.8 + "px";
  drop3.style.backgroundColor = colour;
  drop3.style.borderRadius = ranW*1.8/2+"px / "+(ranH*1.8/2)+"px";
  drop3.style.opacity = 0.65;

  container.appendChild(drop3);

  drop4.style.left = x+5-(ranW*2.3/2) + "px";
  drop4.style.top = y+30-(ranH*2.3/2)+ "px";
  drop4.style.width = ranW*2.3 + "px";
  drop4.style.height = ranH*2.3 + "px";
  drop4.style.backgroundColor = colour;
  drop4.style.borderRadius = ranW*2.3/2+"px / "+(ranH*2.3/2)+"px";
  drop4.style.opacity = 0.6;

  container.appendChild(drop4);

  drop5.style.left = x+5-(ranW*2.7/2) + "px";
  drop5.style.top = y+30-(ranH*2.7/2)+ "px";
  drop5.style.width = ranW*2.7 + "px";
  drop5.style.height = ranH*2.7 + "px";
  drop5.style.backgroundColor = colour;
  drop5.style.borderRadius = ranW*2.7/2+"px / "+(ranH*2.7/2)+"px";
  drop5.style.opacity = 0.55;

  container.appendChild(drop5);

  drop6.style.left = x+5-(ranW*4/2) + "px";
  drop6.style.top = y+30-(ranH*4/2)+ "px";
  drop6.style.width = ranW*4 + "px";
  drop6.style.height = ranH*4 + "px";
  drop6.style.backgroundColor = colour;
  drop6.style.borderRadius = ranW*4/2+"px / "+(ranH*4/2)+"px";
  drop6.style.opacity = 0.4;

  container.appendChild(drop6);

  drop7.style.left = x+5-(ranW*5/2) + "px";
  drop7.style.top = y+30-(ranH*5/2)+ "px";
  drop7.style.width = ranW*5 + "px";
  drop7.style.height = ranH*5 + "px";
  drop7.style.backgroundColor = colour;
  drop7.style.borderRadius = ranW*5/2+"px / "+(ranH*5/2)+"px";
  drop7.style.opacity = 0.3;

  container.appendChild(drop7);

  drop8.style.left = x+5-(ranW*6/2) + "px";
  drop8.style.top = y+30-(ranH*6/2)+ "px";
  drop8.style.width = ranW*6 + "px";
  drop8.style.height = ranH*6 + "px";
  drop8.style.backgroundColor = colour;
  drop8.style.borderRadius = ranW*6/2+"px / "+(ranH*6/2)+"px";
  drop8.style.opacity = 0.2;

  container.appendChild(drop8);


}
