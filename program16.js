// PROGRAM 16: COPY AND JOIN ARRAY // Array + slice() + concat()

console.log("\n======= PROGRAM 16 =======");

let OriginalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Original Array", OriginalArray);



// Find the middle of the array

let middle = Math.floor(OriginalArray.length / 2);

console.log("Middle", middle);


// Copy the FIRST half

let firstHalf = OriginalArray.slice(0, middle);

console.log("First half:", firstHalf);


// Copy the SECOND half

let secondHalf = OriginalArray.slice(middle);

console.log("Second half:", secondHalf);


// Join both halves

let array = firstHalf.concat(secondHalf);

console.log("array:", array);


