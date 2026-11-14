function double(num){
    return num*3;
}
console.log(double(3));
// Arrow function -- to convert normal fn to arrow fn remove function key word,
// remove return key word, remove {} curly brances and use =>
const doubleNum = (value) => value*2;
console.log(doubleNum(6));