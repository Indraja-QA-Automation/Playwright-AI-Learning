let names = ["John", "Alice", "Bob"];
let moreNames = ["Eve", "Charlie"];
let all = names.concat(moreNames);
console.log(all);

let allNames = names.concat(moreNames, ["David", "Frank"]);
console.log(allNames); 

//modern way ... spread operator for concatination
let allNames2 = [...names, ...moreNames];
console.log(allNames2);