// Only change code below this line
function myMutation(arr) {
    var i;
    var j;
    var k = 0;
    for (i = 0; i < arr[1].length; i++) {
        for (j = 0; j < arr[0].length; j++) {
            if (arr[1][i].toLowerCase() == arr[0][j].toLowerCase()) {
                k = k + 1;
                break;
            }
        }
    }
    if (k == arr[1].length) {
        return true;
    }
    return false;
}
// Only change code above this line
console.log(myMutation(["Mary", "Aarmy"]));  // Change this line
module.exports = myMutation;