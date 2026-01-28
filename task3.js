// Task 3
/**
 Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'
 */

// Solution here
var strArray = ["Tom", "Tim", "Tin", "Tik"];
let fullName = "";
for(const name of strArray){
      fullName += name;
}

console.log(fullName);