$(function() {

    // on btn click
    $("#get_answer").click(function() {

        //get tab id
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {

            //send message to current tab
            chrome.tabs.sendMessage(tabs[0].id, { question: $("#question").val() }, function(response) {
                $("#answer").text(response.answer);
            });

        });
    })
});