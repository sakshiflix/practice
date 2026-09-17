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
console.log(phoneBook.get("Amit"));
console.log(phoneBook.get("Jay"));

// Check if key exists

if (phoneBook.has("Jay")) {
    console.log("Jay exists in the phone book");

}

if (phoneBook.has("Rahul")) {
    console.log("Rahul exists in the phone book");

}


// Loop through Map

for (let [name, phone] of phoneBook) {

    console.log(name, phone);

}