console.log("Thos background script")

chrome.runtime.onMessage.addListener(reciever);

window.word = " ";
function reciever(request, sender, sendResponse){
    console.log(request.text);
    window.word = request.text;
}

