let numberRange = [10, 54, 69, 420, 35, 20, 1, 500493, 345, -3];
let numberRange2 = [6, 59, -9, 0, 5, 20, 1, 493, 45, -3];

const findMax = (array) => {
    let max = array[0];
    for (let i =0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    } return max
} 

const findMin = (array) => {
    let min = array[0];
    for (let i =0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    } return min
} 

const findAverage = (array) => {
    let sum = 0;
    for (let i =0; i < array.length; i++) {
      sum = sum + array[i]
    }
    let average = sum / array.length;
    return average;
}




console.log(findMax(numberRange));
console.log(findMax(numberRange2));

console.log(findMin(numberRange));
console.log(findMin(numberRange2));

console.log(findAverage(numberRange));
console.log(findAverage(numberRange2));