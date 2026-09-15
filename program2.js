// ============================================================
// PROGRAM 2: CONDITIONAL STATEMENTS
// if / else if / else + Comparison + Logical Operators
// ============================================================

console.log("\n========== PROGRAM 2 ==========");

let studentMarks = 78;

if (studentMarks >= 90) {
    console.log("Grade A");
} else if (studentMarks >= 75) {
    console.log("Grade B");
} else if (studentMarks >= 60) {
    console.log("Grade C");
} else if (studentMarks >= 40) {
    console.log("Grade D");
} else {
    console.log("Fail");
}

// Logical operators

let attendance = 80;

if (studentMarks >= 40 && attendance >= 75) {
    console.log("Student Passed");
} else {
    console.log("Student Failed");
}
