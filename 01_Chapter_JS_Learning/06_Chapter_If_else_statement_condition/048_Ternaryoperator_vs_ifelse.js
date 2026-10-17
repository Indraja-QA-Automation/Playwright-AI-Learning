// Ternary vs if else
// In ternary we can print only one statement, 
// In if else we can print multiple statments in one condition
let marks = 25;
let result = marks > 35 ? "pass" : "fail";
console.log(result);

if (marks > 35){
    console.log("Student Passed");
    console.log("Student passed without distinction");
    console.log("Student promoted to next grade");
}
else{
console.log("Student failed in the exam");
console.log("Student not promoted to next grade");
}