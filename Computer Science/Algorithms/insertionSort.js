// Insertion Sort Implementation
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return arr;
}

// Example usage
const arr = [12, 11, 13, 5, 6];
console.log(insertionSort(arr)); // Output: [5, 6, 11, 12, 13]