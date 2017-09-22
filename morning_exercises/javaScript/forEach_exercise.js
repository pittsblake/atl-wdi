/*
words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];

words.forEach((word) => {
    const uppWord = word.toUpperCase();
    console.log(uppWord);
})
*/

/*
var squareMe = [0, 1, 10, 24, 595]


squareMe.forEach((num) => {
    const square = Math.pow(num, 2);
    console.log(square);
})
*/


var numbers = [5,7,9,12,20]

numbers.forEach((num) => {
    const sum = numbers.reduce((previous, current) => current += previous);
    const avg = sum / numbers.length;
    console.log(avg);
})
