//HOISTING
console.log(this);

var fullName="Mehmet Gani";
function sayHello(name){
    console.log(`Hello ${fullName}`);
}
sayHello(fullName);
