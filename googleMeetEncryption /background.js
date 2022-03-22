// console.log("background is running")
chrome.browserAction.onClicked.addListener(ButtonClicked);
function ButtonClicked(tab){
    let msg = {
        text: "Meet Encryption"
    }
    chrome.tabs.sendMessage(tab.id,msg)
}