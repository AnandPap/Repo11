// Only change code below this line
function myBouncer(arr) {
    var i;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == false || arr[i] == null || arr[i] == 0 || arr[i] == "" || arr[i] == undefined || Number.isNaN(arr[i])) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}
// Only change code above this line
console.log(myBouncer()); // Change this line
module.exports = myBouncer;