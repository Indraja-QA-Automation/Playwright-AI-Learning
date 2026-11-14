//Function as Expression 

function greet(name){
    return `Hello, ${name}`;
}
 
console.log(greet("Krishna"));

//Anonymous function - function without name
const greet1 = function greet(name){
    return `Hiii, ${name}`;
}

console.log(greet1("ram"));
console.log(greet("Syam"));