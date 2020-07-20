// ZERO BASED
var arr = [
    1,
    2.6,
    false,
    {
        name: "Gani",
        age: 18
    },
    item => console.log(`Value=>${item}`),//ES6
    "Hello!"
];
// console.log(arr);
// console.log(arr[3]);
// console.log(arr[4]);
// arr[4]("something");
// console.log(Array.isArray(arr));

var numbers = [1, 2, 3, 4, 5, 6, 7,8, 9];
// for(var s of numbers){
//     console.log(s);
// } IMPERATIVE
let p = value => console.log(value);
//DECLARATIVE
// numbers.forEach(item=>console.log(item));
//numbers.unshift(0); 
//numbers.forEach(p);
// let sqrt = v => v * v;
// numbers.map(sqrt).forEach(p);
// numbers.forEach(p);
var poppedOut = numbers.pop();
//console.log(`PoppedOut Value =>${poppedOut}`);
//numbers.forEach(p);

var myObject = {
    id:1,
    type:0,
    price:65.7,
    name:"Somename",
    profitFunc:function(){
        this.price=this.price * 1.15;
    },
    sayHello:function(){}
};

Object.keys(myObject).forEach(prop=>
    console.log(`${prop} => 
    Value: ${myObject[prop]} 
    Type: ${typeof myObject[prop]} `));

Object.keys(myObject)
.filter(prop=> typeof myObject[prop] === 'function')
.forEach(f=>console.log(f));

