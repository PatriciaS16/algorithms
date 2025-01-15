function twoSums (arr, k) {

    // Iterate through each element in the array
    for (var i = 0; i < arr.length; i++) {

        // Iterate through each subsequent element in the array
        for (var j = i; j < arr.length; j++) {

            //Check if the sum of two elements equals to the k
            if (arr[i] + arr[j] === k) {

                // Return true if a sum of pair equals k
                return true;
            }
        }
    }
    
    // Return false if no sum of pair is found
    return false;

}

// Array of numbers
let numbers = [10, 15, 3, 7];

// k the sum value
let kNumber = 17;

console.log("Result:", twoSums(numbers, kNumber));

// TESTS

// Array 1: an empty array and any number as k, which should return false
let testArr1 = [];
let testK1 = 10;

console.log("Array 1:", twoSums(testArr1, testK1));

// Array 2: one element with the exact number as k, which should return false
let testArr2 = [5];
let testK2 = 5;

console.log("Array 2:", twoSums(testArr2, testK2));

// Array 3: negative values with a negative k, which should return true
let testArr3 = [-5, 2, -8, 6];
let testK3 = -3;

console.log("Array 3:", twoSums(testArr3, testK3));

// Array 4: floating-point numbers with a floating-point k, which should return true
let testArr4 = [1.5, 2.5, 3.5];
let testK4 = 4;

console.log("Array 4:", twoSums(testArr4, testK4));

// Array 5: duplicated numbers where k is the sum of both, which should return true
let testArr5 = [4, 6, 4, 2];
let testK5 = 8;

console.log("Array 5:", twoSums(testArr5, testK5));

// Array 6: all elements sum up to the value of k, which should return false
let testArr6 = [1, 2, 3, 4];
let testK6 = 10;

console.log("Array 6:", twoSums(testArr6, testK6));


