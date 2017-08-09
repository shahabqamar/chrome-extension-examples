$(function() {
    //init badge idnex
    var badge_index = 0;

    // on btn click
    $("#increment_badge").click(function() {

        //set badge
        chrome.browserAction.setBadgeText({ text: (++badge_index).toString() });

        //update btn DOM
        $(this).find('span').text(badge_index);

        console.log("Badge index is: " + badge_index);

    })
});