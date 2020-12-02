let mousePosX = [];
let mousePosY = [];
let container = document.getElementById("box");

container.addEventListener("mousemove", (event)=>{

  let x = event.clientX;
  let y = event.clientY;
  mousePosX.push(x);
  mousePosY.push(y);

  if (window.opener != null && !window.opener.closed) {
    var txtName = window.opener.document.getElementById("txtName");
    for (let i = 0; i<mousePosX.length; i = i + 3){
      for (let i = 0; i<mousePosY.length; i = i + 3){
        var str = "xpos: "+mousePosX[i]+",ypos: "+mousePosY[i];
        console.log(str);
        var res = str.valueOf();
        txtName.value = res;
      }
    }
  }
})
