function browser(){
    let name="Chrome";

function installBrowser(){
    console.log(name);
}    
return name;
}

/*let run = browser();
console.log(run);*/

/*const run2 = browser();
run2();*/

//installBrowser();

function startBrowser() {
    let name = "edge";

    function installBrowser() {
        console.log(name);
    }

    return installBrowser;
}

const runTc = startBrowser();
runTc();