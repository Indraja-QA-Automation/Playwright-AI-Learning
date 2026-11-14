function result(code){
    if(code>=200 && code<=300)
    return "code is valid";
else if(code>=300 && code<=400){
    return "code is error";
}
else if(code>=400 && code<=500){
    return "Client error";
}
else{
    return `${code} return server error`;
}
}

console.log(result(401));
console.log(result(506));
console.log(result(202));