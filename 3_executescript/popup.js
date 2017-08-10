$(function() {

    //btn click handler
    $("#exec_script").click(function() {

        //executescript on host page using inline JS
        chrome.tabs.executeScript(null, {
            code: 'document.title = "' + $("#your_name").val() + '";'
        });

        //executescript on host page using a js file
        chrome.tabs.executeScript(null, {
            file: "script.js"
        }, function(result) {
            console.log(result);
        });
    })

});