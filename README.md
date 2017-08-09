# chrome-extension-examples
Chrome Extension examples from Squiz Front-end Meetup (SFM) presentation on 10-08-2017

## How to install
1. Clone the repo locally
2. Goto Chrome extensions manager (or type chrome://extensions/ in the address bar)
3. Tick Developer mode
4. Click on Load unpacked extension... and select the location of the extension folder from the repo.
5. You are done. 

### 1_helloworld
Bare minimum setup demonstrating a Chrome Extention in action

### 2_popupjs
Using scripts in popup.js and badge text using chrome.browserAction API.


### 3_executescript
Using chrome.tabs API to executeScript on host page

### 4_contentscript
Using content scripts to inject JS and CSS files into host page

### 5_backgroundscript
Using background page to persist data and calling its functions from popup.js

### 6_messaging
Using chrome.tabs and chrome.runtime API to exchange messages between popup.js and contentscript.js. 

### 7_storage_notifications
Using chrome.storage.sync API to save data across logged in Chrome browsers and notification API.
