// var range = document.getElementById('myRange');
// var typer = document.getElementById("fname");
// console.log("range",range);




// var value = document.getElementById('demo');


var content = document.getElementById('content');
// function myFunction() {
let text = content.innerHTML;

let letters = text.split("");
// console.log(letters);

let letterSpan = letters.map((letter)=>{
  return "<span>"+letter+"</span>";
});

// console.log(letterSpan);

let spanSpring = letterSpan.join("");
// console.log(spanSpring);

content.innerHTML = spanSpring;

let spanTags =  document.getElementsByTagName("span");
let randomMultipliers = letters.map((letter)=>{ return Math.random()*2 - 1 })


// console.log(randomMultipliers);

function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coor = "X coords: " + x + ", Y coords: " + y;
  // document.getElementById("demo").innerHTML = coor;



// range.addEventListener("input",()=>{
  // var range = document.getElementById('myRange');
  let value = event.clientX -30;
  let value2 = event.clientY -30;
  console.log(value);

  for (i = 0; i < spanTags.length; i+=1) {

    let randomMultiplier = randomMultipliers[i];
    let randomMultiplier1 = randomMultipliers[i+1];
   // then we multiply the slider value by the multiplier
   let xPos = value*randomMultiplier;
   let yPos = value2*randomMultiplier1;
    spanTags[i].style.top = yPos + "px";
    spanTags[i].style.left = xPos + "px";
  }
}
// })
