// Only change code below this line
function largestNumFromArr(arr) {
    var maxNumArray = [];
    var i;
    var j;
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            if (j == 0) {
                maxNumArray[i] = arr[i][j];
            } else {
                if (arr[i][j] > maxNumArray[i]) {
                    maxNumArray[i] = arr[i][j];
                }
            }
        }
    }
    return maxNumArray;
}
//Only change code above this line
console.log(largestNumFromArr([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));   // Change this line
module.exports = largestNumFromArr;