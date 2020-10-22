console.log("it's working!");

let currentValue = 10;


chrome.runtime.onMessage.addListener(function(messageContent, sender, sendResponse) {
    console.log(messageContent);
  });
