// ============================================================
// PROGRAM 14: CHARACTER FREQUENCY
// String + Loop + HashMap
// ============================================================

console.log("\n========== PROGRAM 14 ==========");

let word = "hello";

let frequency = new Map();

for (let i = 0; i< word.length; i++) {

    let character = word [i];

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