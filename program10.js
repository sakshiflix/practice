// ============================================================
// PROGRAM 10: ARRAY + LOOP + CONDITION
// Sum of even numbers
// ============================================================

let values = [10, 15, 20, 25, 30, 35];

let sum = 0;

for (let i = 0; i < values.length; i++) {

    if (values[i] % 2 === 0) {
        sum = sum + values[i];
    }
}

console.log("Sum of even numbers:", sum);