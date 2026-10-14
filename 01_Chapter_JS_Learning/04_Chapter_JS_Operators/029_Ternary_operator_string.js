let env = "Prod";
let baseUrl = env === "Staging"? "https://staging-api.example.com" : "https://api.example.com"
console.log(baseUrl);