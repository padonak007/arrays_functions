var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 3, 4, 5, 1]
var inputArray;

function reverse(array) {
    var outputArray = [], i = array.length - 1;
    for (i; i >= 0; i--) {
        outputArray.push(array[i]);
    }
    return outputArray;
}

function filter(array, callback) {
    var outputArray = [];
    for (var i = 0; i < array.length; i++){
        if (callback()) {
            outputArray.push(array[i]);
        }
    }
    return outputArray;
}

$("#bn1").click(function () {
    inputArray = JSON.parse("[" + $("#in1").val() + "]");
    console.log(testArray);
    $("#ou1").text(reverse(inputArray));
});

console.log(filter(testArray, function () {
    return true}));