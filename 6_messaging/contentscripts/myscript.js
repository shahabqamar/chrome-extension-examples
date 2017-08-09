//listen for messages from background script
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("Question recieved: ", request);
        if (request.question == "title")
            sendResponse({ answer: document.title });
        else if (request.question == "url")
            sendResponse({ answer: location.href });
    }
);