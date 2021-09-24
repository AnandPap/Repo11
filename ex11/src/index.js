// Only change code below this line
function splitArrayInGroups(arr, n) {
    var result = [];
    var i;
    var k = n;
    for (i = 0; i < arr.length; i++) {
       if (k > 0) {
           if (i % n == 0) {
                result[n - k] = arr.slice(i, i + n);
                k--;
           }
       } 
    }
    return result;
}
// Only change code above this line
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5], 2)); // Change this line
module.exports = splitArrayInGroups;