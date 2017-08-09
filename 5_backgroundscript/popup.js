$(function() {

    //init badge index
    var badge_index = chrome.extension.getBackgroundPage().getIndex();
    $("#increment_badge span").text(badge_index);

    //on btn click
    $("#increment_badge").click(function() {

        //set badge index
        chrome.browserAction.setBadgeText({ text: (++badge_index).toString() });

        //update DOM
        $(this).find('span').text(badge_index);

        //save index to background script
        chrome.extension.getBackgroundPage().saveIndex(badge_index)

        console.log("Badge index is: " + badge_index);

    })

});