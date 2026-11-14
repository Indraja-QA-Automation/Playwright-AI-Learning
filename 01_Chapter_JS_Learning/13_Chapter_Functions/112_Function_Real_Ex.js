function validStatusCode(status){
    if(status >=200 && status <= 300)
        console.log("Valid Status code");
}

const result = function(status){
    if(status >=200 && status <=300)
        console.log(`${status}, Valid Status code`);
}

const result2 = (status) => {
    if(status>=200 && status <=300)
        console.log(`${status}, valid code`);
}

validStatusCode(200);
result(203);
result2(299);