// Only change code below this line
function multiplyArrayFunction(myArray) {
    var arr = [];
    var product;
    var sum = 0;
    var i;
    var j;
    for (i = 0; i < myArray.length; i++) {
        for (j = 0; j < myArray[i].length; j++) {
            if (i == 0 && j == 0) {
                product = myArray[i][j];
            } else {
                product = product * myArray[i][j];
            }
            sum = sum + myArray[i][j];
        }
    }
    arr[0] = product;
    arr[1] = sum;
    return arr;
}
// Only change code above this line
console.log(multiplyArrayFunction());   //Change this line
module.exports = multiplyArrayFunction;