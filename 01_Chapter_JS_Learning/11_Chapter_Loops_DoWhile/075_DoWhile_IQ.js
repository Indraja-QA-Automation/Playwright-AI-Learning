// Do while vs while


// while -- While will always check the condition first. 
// let a = 10;
// while(a < 10){
//     console.log(a);
//     a++;
// }

// Do while first executes do statements then check for condition
let a = 10;
do {
    console.log(a);
    console.log("Number");
    a++;
} while (a < 10);