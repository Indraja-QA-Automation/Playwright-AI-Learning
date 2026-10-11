// Topic: All number types in JS
/* In JS number is always number type number excepet BigInt Type. 
JS has only one number type which is double precision 64-bit binary format IEEE 754 value. 
It can represent both integer and floating point numbers. */

// Integer Literals

//Decimal base (base 10)
let decimalNumber = 42; // Decimal literal

// Hexadecimal base (base 16)
let hexadecimalNumber = 0x2A; // Hexadecimal literal

// Binary base (base 2)
let binaryNumber = 0b101010; // Binary literal

// Octal base (base 8)
let octalNumber = 0o52; // Octal literal

//2.floating point literals

// Floating Point Literals
let floatingPointNumber = 3.14; // Floating point literal
let float = -4.5;
let float1 = .65; //valid but avoid real world usage, as it can be confusing
let float2 = 32.; //valid but avoid real world usage, as it can be confusing

console.log("float 3.14: " + floatingPointNumber);
console.log("float -4.5: " + float);
console.log("float 0.65: " + float1);
console.log("float 32: " + float2);

//Exponential Notation (Scientific Notation) Literals
let exponentialNumber = 1.23e4; // 1.23 * 10^4 = 12300
let exponentialNumber2 = 5.67E-3; //   5.67 * 10^-3 = 0.00567 
let exponentialNumber3 = 2E10; // 2*10^10

console.log("exponential 1.23e4: " + exponentialNumber);
console.log("exponential 5.67E-3: " + exponentialNumber2);
console.log("exponential 2E10: " + exponentialNumber3);






