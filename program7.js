// ============================================================
// PROGRAM 7: WHILE LOOP
// ============================================================

console.log("\n========== PROGRAM 7 ==========");

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
