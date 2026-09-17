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