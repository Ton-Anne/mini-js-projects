let numberRange = [10, 54, 69, 420, 35, 5000034, -34, 8943, 343 ];
let numberRange2 = [6, 59, -9, 0, 5, 20, 1, 493, 45, -3];


const bubbleSort = (array) => {
    let swapped;
    do {
        swapped = false
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                let tmp = array[i];
                array[i] = array[i +1];
                array[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return array;
}

console.log(bubbleSort(numberRange))
console.log(bubbleSort(numberRange2))
