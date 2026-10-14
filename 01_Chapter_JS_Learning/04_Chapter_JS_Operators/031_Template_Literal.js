let responseTime = 700; //ms
let sla  = 800; //ms
let slaStatus = responseTime <= sla ? "with in sla" : "sla breached";
// template literal ${responseTime}
console.log(`Resonse: ${responseTime}ms - ${slaStatus}`);

console.log(`what is sla - ${sla}ms`);
