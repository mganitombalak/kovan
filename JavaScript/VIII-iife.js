//IIFE IMMEDIATELY INVOKED FUNCTION EXPRESSIONS

var fullName = "Mehmet Gani Tombalak";

function sayHiFormal(name){
    console.log(`Hello ${name}`);
}
sayHiFormal(fullName);
var sayHiInFormal=name=>console.log(`Hi ${name}`);
sayHiInFormal(fullName);

//var f =name=>console.log(`Merhaba ${name}`
(name=>console.log(`Merhaba ${name}`))(fullName);


(function(name){
console.log(`Someting ${name}`);
})("Gani");

