// ============================================================
// PROGRAM 11: OBJECT
// ============================================================

console.log("\n========== PROGRAM 11 ==========");

let student = {

    name: "Sakshi",
    age: 25,
    marks: 85,
    city: "Delhi"

};

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Marks:", student.marks);
console.log("City:", student.city);


// Modify property

student.marks = 90;

console.log("Updated marks:", student.marks);

// Add new property

student.course = "Javascript";

console.log("Course:", student.course);