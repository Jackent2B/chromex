console.log("Background Script is Running")

chrome.browserAction.onClicked.addListener(ButtonClicked);

function ButtonClicked(tab){
//    console.log("Button is clicked");
    let msg = {
        text: "Hello Boi"
    }
    chrome.tabs.sendMessage(tab.id,msg)
}