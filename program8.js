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
console.log("Fourth character:", text[4]);

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
console.log(text.startsWith("hel"));
console.log(text.endsWith("o"));
console.log(text.includes("ello"));""

