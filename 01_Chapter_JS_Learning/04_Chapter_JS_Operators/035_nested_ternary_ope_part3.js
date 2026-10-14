let temp =40;//degrees

let condition = (temp>= 40)? "very hot":
               (temp >=30) ? "hot" :
               (temp >=20) ? "warm" :
               (temp >=10) ? "cool" : "cold";

console.log(`temparature condition ${temp} |feel ${condition}`);      
//console.log("temparature ", temp , "|feel", condition);         


