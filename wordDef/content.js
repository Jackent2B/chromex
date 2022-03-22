console.log("This is content script");

window.addEventListener('mouseup', getSelectionText)

function getSelectionText() {
    
    let selectedText = window.getSelection().toString().trim();
    console.log(selectedText);
    if(selectedText.length>0){
        let message = {
            text: selectedText
        }
        chrome.runtime.sendMessage(message);
    }
}
