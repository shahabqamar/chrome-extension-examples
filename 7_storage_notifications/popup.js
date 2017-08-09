$(function() {

    //save data on btn click
    $("#save").click(function() {

        // Save it using the Chrome extension storage API.
        chrome.storage.sync.set({ 'my_data': $("#my_data").val() }, function() {

            //create notification
            chrome.notifications.create({
                type: "basic",
                title: "Storage Example",
                message: "Data was saved!",
                iconUrl: 'images/icon128.png'
            });

        });

    })

    //retrieve data on btn click
    $("#retrieve").click(function() {

        // retrieve it using the Chrome extension storage API.
        chrome.storage.sync.get(["my_data"], function(data) {

            //set as input value
            $("#my_data").val(data.my_data);

            //create notification
            chrome.notifications.create({
                type: "basic",
                title: "Storage Example",
                message: "Data was retrieved!",
                iconUrl: 'images/icon128.png'
            });

        });

    })

});