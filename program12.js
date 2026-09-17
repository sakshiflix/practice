// ============================================================
// PROGRAM 12: ARRAY OF OBJECTS
// ============================================================

console.log("\n========== PROGRAM 12 ==========");

let students = [

    {
        name: "Jay",
        marks: 80
    },

    {
        name: "Sakshi",
        marks: 92
    },

    {
        name: "Amit",
        marks: 65
    }

];

for (let i = 0; i < students.length; i++) {

    if (students[i].marks >= 75) {

        console.log( 
            students[i].name,
            students[i].marks
        );

    }

}