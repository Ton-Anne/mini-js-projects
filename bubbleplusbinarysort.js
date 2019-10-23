const numberRange = [10, 54, 69, 420, 35, 5000034, -34, 8943, 343];
const numberRange2 = [6, 59, -9, 0, 5, 20, 1, 493, 45, -3, 45, 4567];

const bubbleSort = (array) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                const tmp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return array;
};

console.log('This is now sorted', bubbleSort(numberRange));
console.log('This is now sorted', bubbleSort(numberRange2));

const binarySort = (array, target) => {
    let min = 0;
    let max = array.length - 1;
    let guess;
    while (min <= max) {
        guess = Math.floor((min + max) / 2);
        if (array[guess] === target) {
            return 'Target was found at index ' + guess + ' and has value ' + array[guess];
        } else if (array[guess] < target) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }
    }
    return 'Target value not found in array';
};

console.log(binarySort(numberRange, 35));
console.log(binarySort(numberRange2, 494));
