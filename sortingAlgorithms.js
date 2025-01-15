// Insertion Sort function
function insertionSort(arr) {
    // Start with the second element (first unsorted element)
    for (let i = 1; i < arr.length; i++) {
        // Store the current element to be compared
        let current = arr[i];
        // Initialize j to point to the last sorted element
        let j = i - 1;
        
        // Loop to compare the current element with the sorted portion
        while (j >= 0 && arr[j] > current) {
            // If the sorted element is greater than the current element, move the sorted element one position to the right
            arr[j + 1] = arr[j];
            // Move to the next element in the sorted portion (to the left)
            j--;
        }
        
        // Place the current element in its correct position, (which is one position to the right of the last smaller element)
        arr[j + 1] = current;
    }
    // Return the sorted array
    return arr;
}

// Selection Sort function
function selectionSort(arr) {
    // Loop through the entire array
    for (let i = 0; i < arr.length; i++) {
        // Assume the first unsorted element is the smallest
        let smallestIndex = i;
        
        // Loop through the unsorted elements
        for (let j = i + 1; j < arr.length; j++) {
            // If the current element is less than the assumed smallest
            if (arr[j] < arr[smallestIndex]) {
                // Update the smallest element's index
                smallestIndex = j;
            }
        }
        
        // Swap the smallest element with the first unsorted position
        if (smallestIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[smallestIndex];
            arr[smallestIndex] = temp;
        }
    }
    return arr;
}

// Define the array of numbers to be sorted
let numbers = [100, 95, 10, -10, 32, -55, 44, 10, 33, -564];

// Call the insertionSort function and store the sorted array
let insertionSortedNumbers = insertionSort([...numbers]); // Using spread operator to avoid modifying the original array
// Print the sorted array to the console
console.log('Insertion Sort:', insertionSortedNumbers);

// Call the selectionSort function and store the sorted array
let selectionSortedNumbers = selectionSort([...numbers]); // Using spread operator to avoid modifying the original array
// Print the sorted array to the console
console.log('Selection Sort:', selectionSortedNumbers);

// TESTS

console.log("Insertion sort:", insertionSort(""));
console.log("Insertion sort:", insertionSort(33));
console.log("Insertion sort:", insertionSort([1, 2, 3, 4, 5]));
console.log("Insertion sort:", insertionSort([5, 4, 3, 2, 1]));

console.log("Insertion sort:", selectionSort(""));
console.log("Insertion sort:", selectionSort(33));
console.log("Insertion sort:", selectionSort([1, 2, 3, 4, 5]));
console.log("Insertion sort:", selectionSort([5, 4, 3, 2, 1]));

