// Frist function Calculate Difference

function calculateDifference(a, b) {
    return a - b;
}
console.log(
    calculateDifference(9, 5)
);
console.log(
    calculateDifference(56, 8)
);


//2nd Funtion isOdd

function isOdd(num) {
    return num % 2 !== 0;
}
console.log(isOdd(18));
console.log(isOdd(5));


//3rd Function smallest number from the array

function findMin() {
    console.log(Math.min(113, 15, 58, 178, 99));
}
findMin();


//4th Function Filter Even Numbers

const array=[4,6,21,18,32,124,5,9,56,17,60];

function filterEvenNumbers(numbers){
    return numbers.filter(number => number % 2 === 0);
}

console.log(filterEvenNumbers(array));



//5th Function Sort Array Descending

const arr = [11, 29, 97, 17, 87, 35];

function sortArrayDescending(numbers){
    return numbers.sort().reverse();
}

console.log(
    sortArrayDescending(arr)
);