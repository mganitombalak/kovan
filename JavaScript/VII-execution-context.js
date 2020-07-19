// EXECUTION CONTEXT & FUNCTION STACK
// SCOPE CHAIN
var personName ="Mehmet Gani";
//console.log(`1.${personName}`);
console.log("1");
console.log(this);

function a(){
    // var personName="Gokhan Yurtalan";
    // console.log(`2.${personName}`);
    console.log("2");
    console.log(this);
    // b(personName);
    b()
}

function b(name){
    var myVar="Onur";
    //console.log(`3.${personName}`);
    //console.log(`Hello ${name}`);
    console.log("3");
    console.log(this)
    this.myVar
}

a();