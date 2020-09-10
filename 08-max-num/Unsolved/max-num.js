// Write code to return the largest number in the given array
var arr = [3, 1, 17, 5, 6];

var maxNum = function(arr) {
    let largestNum = 0;
    arr.forEach(num => {
        if (num > largestNum) {
            largestNum = num;
        }
        console.log(`largestNum: ${largestNum}`);
    });
    return largestNum;
};
