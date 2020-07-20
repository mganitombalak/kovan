// CLOSURE

//CURRYING

// function saySomething(something) {
//     return function (name) {
//         console.log(`${something} ${name}`)
//     }
// }

// saySomething("Hello")("Gani");

// var fResult = saySomething("Hello");
// console.log(typeof fResult);
// fResult("gokhan");

function arrOfFuncs() {
    var funcArr = [];

    for (var i = 0; i < 4; i++) {
        funcArr.push((j => () => console.log(j))(i));
    }
    return funcArr;
}
var arr = arrOfFuncs();
arr[0]();
arr[1]();
arr[2]();
arr[3]();