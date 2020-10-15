console.log("I'm here on this website");


function replace(word1,word2) {
  let regEX = new RegExp(word1, "g");
  document.body.innerHTML =   document.body.innerHTML.replace(regEX,word2);

}

replace("Moon","Potato");

function gotMessage(request){
  console.log(request);
  replace(message.word1,message.word2);
}

chrome.runtime.onMessage.addListener(gotMessage);
