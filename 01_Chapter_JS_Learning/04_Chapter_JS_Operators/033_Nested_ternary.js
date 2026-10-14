// nested Ternary
//multiple conditions
// marks < 70 passed with distinction
// marks < 35 failed in the exam

let marks =60;

let exam_status = (marks > 35) ? (marks > 70 ? "Passed with Distinction" : "Cleared the exam") : "Failed in the exam";

console.log(`what is the exam status: ${exam_status}`);