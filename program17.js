// PROGRAM 17: DELETE ELEMENTS FROM ARRAY // Array + splice() //

console.log("\n======= PROGRAM 17 =======");


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbers2 = [...numbers]

console.log("Original Array:", numbers);


// Delete 2 elements from the START


numbers.splice(0, 2);

console.log("After deleting from start:", numbers);


// Delete 2 elements from the MIDDLE


let middleIndex = Math.floor(numbers.length / 2);
numbers.splice(middleIndex - 1, 2);

console.log("After deleting from middle:", numbers);


// Delete 2 elements from the END

numbers.splice(-2);

console.log("After deleting from end:", numbers);
