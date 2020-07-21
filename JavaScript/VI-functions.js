//FUNCTIONS - FUNCTION STATEMENTS / FUNCTION EXPRESSIONS

// FUNCTION STATEMENT
console.log("Before");
sayHello();
function sayHello() {
    console.log("Hello");
}
console.log("After");
sayHello();
console.log("=================================")
//FUNCTION EXPRESSION
console.log("Before");
//sayHi();
var sayHi = function () {
    console.log("Hi");
}
console.log("After");
sayHi();
//console.log(this);
console.log("=============ARGS================")
//FUNCTION ARGUMENTS / SPREAD OPERATION
function greeting(firstName, lastName, ...others) {
    console.log(`args: ${arguments.length}`);
    //console.log(`${firstName} ${lastName}`);
    others.forEach(item => console.log(item));
}

greeting('Gani', 'Tombalak', 17, function () { console.log("Hi") });
greeting();