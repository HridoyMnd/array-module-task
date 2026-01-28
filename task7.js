// Task 7
/**
 Given a 2D array, update the value at second row first item to 99 and print the updated array.
 [
  [1, 2],
  [3, 4],
  [5, 6]
]
expected output
[
  [1, 2],
  [99, 4],
  [5, 6]
]
 */

// Solution here

const numberArrays =  [
  [1, 2],
  [3, 4],
  [5, 6]
]

const accArray = numberArrays[1];
accArray[0] = 99;
console.log(numberArrays);