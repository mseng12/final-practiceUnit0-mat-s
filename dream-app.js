// Dream Application: StudyBuddy
// This file contains small code examples showing how Unit 0 skills
// could be used in a larger application.

// ==================================================
// Values, Data Types, and Operations
// ==================================================
// Pseudocode:
// 1. Store a student's name and assignment counts.
// 2. Calculate progress as a percentage.
// 3. Print the result to test the calculation.

let studentName = "Mat";
let assignmentsCompleted = 4;
let totalAssignments = 6;
let progressPercent = (assignmentsCompleted / totalAssignments) * 100;

console.log(studentName + "'s progress is " + progressPercent + "%");
// Expected output: Mat's progress is 66.66666666666666%


// ==================================================
// Stringing Characters Together
// ==================================================
// Pseudocode:
// 1. Store a reminder with extra spaces.
// 2. Clean it up using trim().
// 3. Format it using toUpperCase().
// 4. Print the result.

let reminder = "  finish math homework tonight  ";
let cleanedReminder = reminder.trim().toUpperCase();

console.log(cleanedReminder);
// Expected output: FINISH MATH HOMEWORK TONIGHT


// ==================================================
// Control Structures and Logic
// ==================================================
// Pseudocode:
// 1. Check how many tasks are left.
// 2. If none are left, congratulate the user.
// 3. Otherwise, tell the user how many tasks remain.

let tasksLeft = 2;

if (tasksLeft === 0) {
  console.log("Great job! You finished everything.");
} else {
  console.log("You still have " + tasksLeft + " task(s) left to complete.");
}
// Expected output: You still have 2 task(s) left to complete.


// ==================================================
// Building Arrays
// ==================================================
// Pseudocode:
// 1. Create an array of subjects.
// 2. Log the full array to test it.

let subjects = ["Math", "Science", "History", "English"];

console.log(subjects);
// Expected output: [ 'Math', 'Science', 'History', 'English' ]


// ==================================================
// Using Arrays
// ==================================================
// Pseudocode:
// 1. Create an array of assignments.
// 2. Add a new assignment using push().
// 3. Filter for assignments that include the word "Quiz".
// 4. Log both arrays to test the changes.

let assignments = ["Essay", "Lab Report", "Flashcards"];
assignments.push("Practice Quiz");

console.log(assignments);
// Expected output: [ 'Essay', 'Lab Report', 'Flashcards', 'Practice Quiz' ]

let importantAssignments = assignments.filter(task => task.includes("Quiz"));

console.log(importantAssignments);
// Expected output: [ 'Practice Quiz' ]


// ==================================================
// Creating and Using Objects
// ==================================================
// Pseudocode:
// 1. Create an object to store a student profile.
// 2. Include properties like name, streak, and favorite subject.
// 3. Access object values and print them.

let studentProfile = {
  name: "Mat",
  streak: 5,
  favoriteSubject: "Math"
};

console.log(studentProfile.name);
console.log(studentProfile.favoriteSubject);
// Expected output:
// Mat
// Math