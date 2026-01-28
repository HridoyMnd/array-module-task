// Task 4
/**
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
 */


// Solution here
const statement = "I am a hard working person";
let revStatement = statement.split(" ").reverse().join(" ")

console.log(revStatement);

