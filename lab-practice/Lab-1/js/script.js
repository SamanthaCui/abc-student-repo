var range = document.getElementById('myRange');
// console.log("range",range);

var value = document.getElementById('demo');

var content = document.getElementById('content');

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
console.log(content.innerHTML);

let spanTags =  document.getElementsByTagName("span");
console.log(spanTags);
let randomMultipliers = letters.map((letter)=>{ return Math.random()*2 - 1 })
// console.log(randomMultipliers);

// function changeHappend(){
//   console.log("What happend?");
//   value.innerHTML = range.value;
// }
//
// range.addEventListener("change",changeHappend);

// function inputHappend(){
//   console.log("What input?");
//   value.innerHTML = range.value;
//   content.style.margintop = range.value + "px";
// }

range.addEventListener("input",()=>{
  let value = range.value;
  for (i = 0; i < spanTags.length; i+=1) {

    let randomMultiplier = randomMultipliers[i];
    let randomMultiplier1 = randomMultipliers[i+1];
   // then we multiply the slider value by the multiplier
   let xPos = value*randomMultiplier;
   let yPos = value*randomMultiplier1;
    spanTags[i].style.top = yPos + "px";
    spanTags[i].style.left = xPos + "px";
  }
})
