let container = document.getElementById("bodyContent");
let currentValue = 0;

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
    console.log(currentValue);
    chrome.runtime.sendMessage({type:"increasedValue"});
  }else{
    console.log("noooooooooooooo");
    for(var i=0;i<links.length;i++)
    {
      links[i].href='#';
      links[i].onclick = function(){  return false; };
    }
  }

})


var popup = window.open(
    chrome.extension.getURL("popup/index.html"),
    "exampleName",
    "width=400,height=200"
);
