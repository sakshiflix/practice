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