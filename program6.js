// ============================================================
// PROGRAM 6: BREAK & CONTINUE
// ============================================================

console.log("\n========== PROGRAM 6 ==========");

// BREAK
// Completely stops the loop

console.log("Using break:");

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
