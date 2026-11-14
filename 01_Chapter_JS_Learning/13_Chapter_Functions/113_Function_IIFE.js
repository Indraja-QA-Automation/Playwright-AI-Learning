// IIFE - Immediate Invoke Function Expression(IIFE)
// normal function 
function a(){
    console.log("Value correct");
}
a();
//IIFE

(function (){
console.log("Print Result");
}) ();


(function(i, j){
     i=8, j=9;
    sum = i+j;
    console.log(sum);
})();

(() => {
    console.log("print automatically");

}) ();

(()=>{
    let a =7
    console.log(a);
}) ();

