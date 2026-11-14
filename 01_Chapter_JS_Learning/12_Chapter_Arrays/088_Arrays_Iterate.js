let result = ["pass","Fail","Distinction","Dinstinction with first class"];
// for loop
for(let i=0; i<result.length;i++){
    console.log(i, result[i]);
}
// for of loop
for(res of result){
    console.log(res);
}

// for in loop
for(res in result){
    console.log(res, result[res]);
}

//forEach loop(no return value)
result.forEach((index, res)=> {
console.log(`${index}: ${res}`)
})



