function sum(a,b,c){
return a+b+c;
}

let result = sum(8,7,5);
console.log(result);

//let num = [3, 4, 5];
//let add;
//console.log(add(...num));
/*
function hasError(...codes){
    return codes.some(codes => codes>=300);
    console.log(codes);
}
 let responseCodes = [100, 200, 300];
 let responseCodes2 = [200, 30 ,35];
 hasError(...responseCodes);
 */

 function hasError(...codes) {
    return codes.some(c => c >= 400);
}

let responseCodes = [200, 201, 404];
let responseCodes2 = [200, 201, 404, 500];
hasError(...responseCodes);


