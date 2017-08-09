$(function() {

    $("#exec_script").click(function() {

        chrome.tabs.executeScript(null, {
            code: 'document.title = "' + $("#your_name").val() + '";'
        });
    })

});