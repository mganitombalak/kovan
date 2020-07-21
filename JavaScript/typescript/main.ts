interface IPerson {
    getFullName(): String;
}
class Person implements IPerson {
    constructor(public firstName: String, public lastName: String) { }
    getFullName(): String {
        return `${this.firstName} ${this.lastName}`;
    }
}
class HelloWorld {
    sayHello(value: IPerson) {
        console.log(`Hello ${value.getFullName()}`);

    }
}
var p = new Person("Mehmet Gani", "Tombalak");
var p2 = { firstName: "Firat", lastName: "Feroglu", getFullName: () => "Firat Feroglu" };
var sh = new HelloWorld();
sh.sayHello(p);
sh.sayHello(p2);