let container = document.getElementById("bodyContent");
let text = document.getElementById("mw-page-base");
let currentValue = 0;
let box = document.createElement('div');

var links = document.getElementsByTagName('a');


chrome.runtime.sendMessage({type:"getCurrentValue"}, function(response) {
  console.log("response is",response);
  currentValue = response.value;
  // num.innerHTML = currentValue;
});

container.addEventListener("click", (event)=>{
  let scroll = this.scrollY;
  let x = event.clientX;
  let y = event.clientY+this.scrollY;
  // console.log("mouse at", x, y);
  if (currentValue<30){
    currentValue = currentValue + 1;
    let num  = 30-currentValue;
    box.innerHTML = "You have " + num + " of clicks left";
    box.style.position = "absolute";
    box.style.color = "red";
    box.style.fontSize = "x-large";
    box.style.left = "300px";
    box.style.width = "300px";
    box.style.height = "100px";
    // box.style.width = "300px";
    text.appendChild(box);
    console.log(currentValue);
    chrome.runtime.sendMessage({type:"increasedValue"});
  }else{
    box.innerHTML = "Sorry no more links for you today :(";
    box.style.color = "red";
    box.style.fontWeight = "900";

    box.style.position = "absolute";
    box.style.fontSize = "x-large";
    box.style.left = "170px";
    box.style.width = "500px";
    box.style.height = "100px";
    // box.style.width = "300px";
    text.appendChild(box);
    console.log(currentValue);
    console.log("noooooooooooooo");
    for(var i=0;i<links.length;i++)
    {
      links[i].href='#';
      links[i].onclick = function(){  return false; };
    }
  }
})
//
//
// var popup = window.open(
//     chrome.extension.getURL("popup/index.html"),
//     "exampleName",
//     "width=400,height=200"
// );
