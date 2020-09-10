// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    vowels = ['a', 'e', 'i', 'o', 'u']
    stringVowels = [];

    stringArr = str.toLowerCase().split("");
    console.log(stringArr);

    stringArr.forEach(letter => {
        if (vowels.indexOf(letter) > -1) {
            stringVowels.push(letter);
        }
    })
    console.log(stringVowels);
    return stringVowels.length;
};
