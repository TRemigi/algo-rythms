// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    let counted = 0;
    arr.forEach(num => {
        counted = counted + num;
        console.log(counted);
    });
    console.log(`final: ${counted}`);
    return counted;
};
