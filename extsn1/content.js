console.log("Extension is running");

// let paras = document.getElementsByTagName('p');

// for(each of paras){
//     each.style.background = "orange"
// }

chrome.runtime.onMessage.addListener(getMessage);

function getMessage(message, sender, senderResponse){
    console.log(message.text);
    if(message.text == "Hello Boi"){
        let paras = document.getElementsByTagName('p');
        for(each of paras){
            each.style.background = "orange"
        }
    }
}