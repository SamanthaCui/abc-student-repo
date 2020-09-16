
var typer = document.getElementById("fname");
// var output1 = document.getElementById("demo-1");
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

var y = document.getElementById("myAudio");


output.innerHTML = slider.value;

function myFunction() {
  var x = document.getElementById("myDIV");
  x.style.display = "block";

  var i;
  for (i = 0; i < Number(typer.value); i++) {

    console.log(i);
    var img = document.createElement("img");
    img.src = "dance.gif";
    var srs = document.getElementById("myDIV");
    srs.appendChild(img);
  }
 y.play();
}

slider.oninput = function() {
  output.innerHTML = this.value;

  var cmm = document.getElementById("myDIV").children;
  for (var i = 0; i < cmm.length; i++) {
    cmm[i].width = Number(this.value)*6;
  }
}


function myFunction1() {
  location.reload();
}
