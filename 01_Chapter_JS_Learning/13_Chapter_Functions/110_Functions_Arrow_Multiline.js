const score = (marks) => {
    if(marks >= 90) 
        return "pass";
    return "fail";
}

console.log(score(70));
console.log(score(90));