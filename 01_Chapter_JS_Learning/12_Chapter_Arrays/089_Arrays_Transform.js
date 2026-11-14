let scores = [10,20,30,40,50];

let grades = scores.map(score => score>40 ? "Pass" : "Fail");
console.log(grades);    

//filter
let filterResult = scores.filter(score => score>30);
console.log(filterResult);
