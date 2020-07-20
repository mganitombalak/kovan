// FUNCTIONS - FUNCTION STATEMENT / FUNCTION EXPRESSIONS

//FUNCTION STATEMENT

sayHello();
function sayHello() {
    console.log("hi");
}

//FUNCTION EXPRESSION
console.log("Before");
var sayHi = function () {
    console.log("Hi");
}
console.log(this);