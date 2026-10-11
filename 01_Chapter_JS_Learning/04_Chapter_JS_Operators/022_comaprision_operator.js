/* Comparision operators compares the values, always returns boolean value like true or flase
operators <,>, <=, >=, !, ==, ====
== is comapres the values, loose comparision
=== is comapres the type of the value, tight comparision
*/

let a =9;
let b =3;

console.log(a<b);
console.log(a>b);
console.log(a<=b);
console.log(a>=b);
console.log(a!=b);

// ==, === operators

let i = 10;
let j = "10";
console.log(i==j);
console.log(i===j);

// !
console.log(10 !="10"); // with != it compares only values same as ==
console.log(10 !== "10"); // with !== it compares the type of value same as ===

