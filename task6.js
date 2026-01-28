// Task 6
/**
 Given an array of student objects, print each student’s name and marks.


 const students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]


// expected output
John scored 85
Alice scored 90

 */

// Solution here
const students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]


const fstStudentName = students[0].name;
const fstStudentMarks = students[0].marks;
const sndStudentName = students[1].name;
const sndStudentMarks = students[1].marks;

console.log(`First student name: ${fstStudentName} and marks: ${fstStudentMarks}`);
console.log(`Second student name: ${sndStudentName} and marks: ${sndStudentMarks}`);