let statusCode = 200;

let category = statusCode < 300? "success":
               statusCode < 400? "Redirect":
               statusCode <500 ? "Clienterror" : "servererror";

console.log(`Status: ${statusCode}, ${category}`);               