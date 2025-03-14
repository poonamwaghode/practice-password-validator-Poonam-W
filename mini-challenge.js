// Task 1: Initialize the Array
// 1. Create an array with a size of seven and fill it with "Hello"
let array1 = new Array(7).fill("Hello");
console.log('Task 1 - Full Array:', array1); // Logs: ["Hello", "Hello", "Hello", "Hello", "Hello", "Hello", "Hello"]

// Task 2: Update the Array
// 1. Fill part of the array with "Hi"
array1.fill("Hi", 2, 5); // Changes slots 2, 3, and 4 (index 2 to index 5, non-inclusive)
console.log('Task 2 - Updated Array:', array1); // Logs: ["Hello", "Hello", "Hi", "Hi", "Hi", "Hello", "Hello"]

// Task 3: Populate the Array with a for Loop
// 1. Create a new array with a size of five
let array2 = new Array(5);

// 2. Use a for loop to assign each slot a value of index * 10
for (let i = 0; i < array2.length; i++) {
    array2[i] = i * 10;
}
console.log('Task 3 - Populated Array:', array2); // Logs: [0, 10, 20, 30, 40]