// BIND
var person = {
    name: "Gani",
    surname: "Tombalak",
    getFullName: function () {
        return `${this.name} ${this.surname}`;
    }
}
var person2 = {
    name: "Beyza",
    surname: "Ekici"
}
var saySomething = function (something) {
    console.log(this);
    console.log(`${something} ${this.getFullName()}`)
}
//saySomething("Hello");
//var saySomethingToPerson2 = saySomething.bind(person2);
// saySomethingToPerson2("Hello");

// CALL APPLY
// saySomething.call(person,"Merhaba");
// saySomething.apply(person,["Merhaba"]);

// SUBSTITUTING METHOD OF ANOTHER OBJECT
console.log(person.getFullName.apply(person2));
