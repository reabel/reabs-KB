// Linear Search Implementation
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1; // Target not found
}

// Example usage
const arr = [1, 3, 5, 7, 9];
console.log(linearSearch(arr, 7)); // Output: 3