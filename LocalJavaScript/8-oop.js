// LITERAL OBJECT & FUNCTIONS & FIRST CLASS OBJECT

// LITERAL OBJECT
var myObj = {
    name: "Gokhan",
    surname: "Yurtalan",
    // getFullName: function () {  //ES5
    //     console.log(this);
    //     return `${this.name} ${this.surname}`;
    // }
    getFullName: () => `${this.name} ${this.surname}`  //ES6
};

// console.log(myObj.name);
// console.log(myObj['name']);
// console.log(myObj['getFullName']());


// ES 5 FIRST CLASS OBJECT

function person(firstName, lastName) {
    console.log(this);
    this.personName = "Gokhan";
    this.personLastName = "Yurtalan";
    console.log(this);
    this.getFullName = function () {
        return `${this.personName} ${this.personLastName}`
    }
}

var p1 = new person();
console.log("====================");
console.log(this);
console.log(p1.getFullName);
console.log(p1.getFullName());