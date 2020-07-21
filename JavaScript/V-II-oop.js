// LITERAL OBJECT & FUCTIONS & FIRST CLASS OBJECT


// LITERAL OBJECT

// var myObj = {
//     name: "Gani",
//     surname: "Tombalak",
//     getFullName: function () { // ES5
//         console.log(this);
//         return `${this.name} ${this.surname}`;
//     }
//     // getFullName:()=> {
//     //     console.log(this);
//     //     return `${this.name} ${this.surname}`}
//     // ES6 ARROW FUNCTION / FAT ARROW FUNCTION

// };

// // console.log(myObj.name);
// // console.log(myObj['name']);
// // console.log(myObj['getFullName']());


// // ES 5 FIST CLASS OBJECT
// function person(firstName, lastName) {
//     console.log(this);
//     this.personName = firstName;
//     this.personLast = lastName;
//     console.log(this);
//     // this.getFullName = function () {
//     //     return `${this.personName} ${this.personLast}`;
//     // }
//     this.getFullName = () => `${this.personName} ${this.personLast}`;
// }
// var p1 = new person("Gani", "Tombalak");
// console.log("========================")
// //console.log(this);
// // console.log(p1.personName);
// // console.log(p1.personLast);
// //console.log(p1.getFullName);
// console.log(p1.getFullName());
// console.log("========================")
// var p2 = new person("Fatih", "Cabi");
// //console.log(p2.getFullName);
// console.log(p2.getFullName());
// console.log(this);

// //ES6 

// class Pers {
//     constructor(fistName, lastName) {
//         this.name = fistName;
//         this.surName = lastName
//     }
//     getFullName() {
//         return `${this.name} ${this.surName}`;
//     }
// }

// var p3 = new Pers("Huseyin Cihad", "Guler");
// console.log(p3.getFullName());

var mySecondObject = {
    name: "My Second Object",
    print: function () {
        console.log(this);
        this.name = "My Second Object is updated";
        console.log(this);
        var update = function (value) {
            console.log(this);
            this.name = value;
        }
        update("My Second Object updated again!");
        console.log(this);
    }
}

// mySecondObject.print();

console.log(0.2 + 0.1);
console.log(0.2 + 0.1 === 0.3);