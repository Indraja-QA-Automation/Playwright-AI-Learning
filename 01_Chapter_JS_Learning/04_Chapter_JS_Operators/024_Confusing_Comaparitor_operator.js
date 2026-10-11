// Rule :
//   ==   → loose equality  (does type coercion, surprising)
//   ===  → strict equality (no coercion, what you usually want)

// ---------- 1. Empty string vs 0 vs "0"  --------
console.log("10"==10); // true loose eqaulity comares value
console.log(10=="10"); // true loose eqaulity comares value
console.log(""==0); // true, "0" coerced to Number → 0
console.log(0==""); // true, "0" coerced to Number → 0
console.log(""=="0"); // false, both strings 
console.log("10"=="10");// true

// strict equality ===
console.log("10"===10); // false, strict equality compares literal type
console.log(10==="10"); // false
console.log("10"==="10"); // true, both types are strings
