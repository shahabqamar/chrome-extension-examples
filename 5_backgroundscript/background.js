var index = 0;

function saveIndex(data) {
    index = data;
    console.log("Index saved: " + data);
}

function getIndex() {
    console.log("Index returned: " + index);
    return index;
}