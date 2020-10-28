// let findWord = document.getElementById("findword");
let num = document.getElementById("number");
let text = document.getElementById("wind");
let currentValue = 0;

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log(message);
  if(message.type == "getCurrentValue"){
    sendResponse({type:"currentValue",value:currentValue})
    if (currentValue <30){
      num.innerHTML = 30-currentValue;
    }else{
      text.innerHTML = "Sorry, no more links for you today."
    }
  }else if (message.type == "increasedValue"){
    currentValue = currentValue + 1;
    if (currentValue <30){
      num.innerHTML = 30-currentValue;
    }else{
      text.innerHTML = "Sorry, no more links for you today."
    }
  }
});


// window.close();
