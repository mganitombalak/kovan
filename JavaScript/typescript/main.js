var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
    }
    HelloWorld.prototype.sayHello = function (value) {
        console.log("Hello " + value.getFullName());
    };
    return HelloWorld;
}());
var p = new Person("Mehmet Gani", "Tombalak");
var p2 = { firstName: "Firat", lastName: "Feroglu", getFullName: function () { return "Firat Feroglu"; } };
var sh = new HelloWorld();
sh.sayHello(p);
sh.sayHello(p2);
