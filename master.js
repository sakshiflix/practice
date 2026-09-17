// ============================================================
// JAVASCRIPT PROGRAMMING BASICS
// 15 Programs - Beginner Learning Path
// ============================================================


// ============================================================
// PROGRAM 1: VARIABLES, DATA TYPES & OPERATORS
// ============================================================

console.log("\n========== PROGRAM 1 ==========");

const name = "Sakshi";
let age = 25;
let marks = 85;
let passed = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Marks:", marks);
console.log("Passed:", passed);

// Arithmetic operators
let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);

// Assignment operators
let number = 10;

number += 5; // number = number + 5
console.log(number);

number -= 3; // number = number - 3
console.log(number);


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


// ============================================================
// PROGRAM 3: FUNCTIONS
// Parameters, Arguments & Return
// ============================================================

console.log("\n========== PROGRAM 3 ==========");

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

let result1 = add(10, 5);
let result2 = multiply(10, 5);

console.log("Addition:", result1);
console.log("Multiplication:", result2);
console.log("Subtraction:", subtract(10, 5));
console.log("Division:", divide(10, 5));


// ============================================================
// PROGRAM 4: SWITCH
// switch / case / break / default
// ============================================================

console.log("\n========== PROGRAM 4 ==========");

function calculate(x, y, operator) {

    switch (operator) {

        case "+":
            return x + y;

        case "-":
            return x - y;

        case "*":
            return x * y;

        case "/":
            return x / y;

        default:
            return "Invalid operator";
    }
}

console.log(calculate(10, 5, "+"));
console.log(calculate(10, 5, "-"));
console.log(calculate(10, 5, "*"));
console.log(calculate(10, 5, "/"));
console.log(calculate(10, 5, "%"));


// ============================================================
// PROGRAM 5: FOR LOOP
// ============================================================

console.log("\n========== PROGRAM 5 ==========");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Print even numbers

console.log("Even numbers:");

for (let i = 1; i <= 20; i++) {

    if (i % 2 === 0) {
        console.log(i);
    }
}


// ============================================================
// PROGRAM 6: BREAK & CONTINUE
// ============================================================

console.log("\n========== PROGRAM 6 ==========");


// BREAK
// Completely stops the loop


for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}


// CONTINUE
// Skips the current iteration

console.log("Using continue:");

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        continue;
    }

    console.log(i);
}


// ============================================================
// PROGRAM 7: WHILE LOOP
// ============================================================

let count = 1;

while (count <= 10) {

    console.log(count);

    count++;
}


// Find first number divisible by 7

let numberToCheck = 1;

while (numberToCheck % 7 !== 0) {
    numberToCheck++;
}

console.log("First number divisible by 7:", numberToCheck);


// ============================================================
// PROGRAM 8: STRING
// String indexing, length & reverse
// ============================================================

console.log("\n========== PROGRAM 8 ==========");

let text = "hello";

console.log("String:", text);
console.log("Length:", text.length);

console.log("First character:", text[0]);
console.log("Second character:", text[1]);


// Reverse string

let reverse = "";

for (let i = text.length - 1; i >= 0; i--) {

    reverse = reverse + text[i];

}

console.log("Reverse:", reverse);


// String methods

console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.includes("ell"));


// ============================================================
// PROGRAM 9: ARRAY
// ============================================================

console.log("\n========== PROGRAM 9 ==========");

let numbers = [10, 25, 7, 40, 15];

console.log("Array:", numbers);
console.log("First element:", numbers[0]);
console.log("Array length:", numbers.length);


// Find largest number

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] > largest) {
        largest = numbers[i];
    }

}

console.log("Largest:", largest);


// Basic array methods

numbers.push(50);

console.log("After push:", numbers);

numbers.pop();

console.log("After pop:", numbers);


// ============================================================
// PROGRAM 10: ARRAY + LOOP + CONDITION
// Sum of even numbers
// ============================================================

console.log("\n========== PROGRAM 10 ==========");

let values = [10, 15, 20, 25, 30, 35];

let sum = 0;

for (let i = 0; i < values.length; i++) {

    if (values[i] % 2 === 0) {
        sum = sum + values[i];
    }

}

console.log("Sum of even numbers:", sum);


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

student.course = "JavaScript";

console.log("Course:", student.course);


// ============================================================
// PROGRAM 12: ARRAY OF OBJECTS
// ============================================================

console.log("\n========== PROGRAM 12 ==========");

let students = [

    {
        name: "Rahul",
        marks: 80
    },

    {
        name: "Sakshi",
        marks: 92
    },

    {
        name: "Amit",
        marks: 65
    }

];


for (let i = 0; i < students.length; i++) {

    if (students[i].marks >= 75) {

        console.log(
            students[i].name,
            students[i].marks
        );

    }

}


// ============================================================
// PROGRAM 13: HASHMAP / MAP
// ============================================================

console.log("\n========== PROGRAM 13 ==========");

let phoneBook = new Map();


// Add data

phoneBook.set("Rahul", "9876543210");
phoneBook.set("Sakshi", "9876500000");
phoneBook.set("Amit", "9876511111");


// Get value

console.log(phoneBook.get("Rahul"));
console.log(phoneBook.get("Sakshi"));


// Check whether key exists

if (phoneBook.has("Rahul")) {
    console.log("Rahul exists");
}


// Loop through Map

for (let [name, phone] of phoneBook) {

    console.log(name, phone);

}


// ============================================================
// PROGRAM 14: CHARACTER FREQUENCY
// String + Loop + HashMap
// ============================================================

console.log("\n========== PROGRAM 14 ==========");

let word = "hello";

let frequency = new Map();


for (let i = 0; i < word.length; i++) {

    let character = word[i];

    if (frequency.has(character)) {

        frequency.set(
            character,
            frequency.get(character) + 1
        );

    } else {

        frequency.set(character, 1);

    }

}


console.log(frequency);


// ============================================================
// PROGRAM 15: RECURSION
// Factorial using recursion
// ============================================================

console.log("\n========== PROGRAM 15 ==========");

function factorial(n) {

    // Base condition

    if (n === 0) {
        return 1;
    }

    // Recursive call

    return n * factorial(n - 1);
}


console.log("Factorial:", factorial(5));


// ============================================================
// END
// ============================================================
