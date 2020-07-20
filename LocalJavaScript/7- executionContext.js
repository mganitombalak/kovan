var personName = "Gokhan Yurtalan";
console.log(personName);

function a() {
    var personName = "Tulay Yurtalan";
    console.log(`2.${personName}`);
    b(personName);
}
function b() {
    var myVar = "asd";
    this.myVar = "adfdsf";
    console.log(this);
}
a();


