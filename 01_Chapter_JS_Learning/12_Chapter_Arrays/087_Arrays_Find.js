let temp=[10,20,30,40,50];
console.log(temp);

let findResult = temp.find(temp => temp>20);
console.log(findResult);

let findResultIndex = temp.findIndex(temp => temp>20);
console.log(findResultIndex);

console.log(temp.findLast(temp => temp>20));

console.log(temp.findLastIndex(temp => temp>20));