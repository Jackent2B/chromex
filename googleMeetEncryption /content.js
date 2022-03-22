// console.log("content is running");
chrome.runtime.onMessage.addListener(getMessage);
function getMessage(message, sender, senderResponse){
    
    const startUrl = String(window.location.href).substring(0,24);
    const encryption = "xxx-xxxx-xxx";
    const nextURL = startUrl + encryption; 
    const nextTitle = 'Encrypted URL';
    const nextState = {additionalInformation: 'The URL of the page is encrypted'};
    window.history.replaceState(nextState, nextTitle, nextURL);
}