// ============================================================
// PROGRAM 9: ARRAY
// ============================================================

console.log("\n========== PROGRAM 9 ==========");

let numbers = [10, 25, 7, 40, 15];

console.log("Array:", numbers);
console.log("First element:", numbers[0]);
console.log("Array Length:", numbers.length);


// Find largest number

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] > largest) {
        largest = numbers[i];
    }

}

console.log("largest:", largest);



// Find smallest number

let smallest = numbers[0];

for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

console.log("smallest:", smallest);


// Basic array methods

numbers.push(50);

console.log("After push:", numbers);

numbers.pop();

console.log("After pop:", numbers);

