let container = document.getElementById("box");

container.addEventListener("mousemove", (event)=>{

  let x = event.clientX;
  let y = event.clientY;
  console.log("drop at", x, y);

  if (window.opener != null && !window.opener.closed) {
        layer1.innerHTML = event.clientX;
    }
    window.close();

})
