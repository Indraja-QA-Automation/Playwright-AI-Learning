let browsers = ["Chrome","Edge","Firefox","Opera","Safari"];
console.log(browsers);

browsers.pop();
console.log(browsers);

let removed =browsers.shift();
console.log(removed);

console.log(browsers);
console.log(browsers.length);

for(let i=0; i<browsers.length; i++){
    console.log(browsers[i]);
    if(browsers[i]==="Firefox"){
        console.log("Execute the script in firefox browser");
    }
    else{
        console.log("Execute the script in Edge or opera browser");
    }
}