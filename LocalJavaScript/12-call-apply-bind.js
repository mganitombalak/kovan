// Call Apply Bind

var person = {
    name: "Gokhan",
    surname: "Yurtalan",
    getFullName: function () {
        return `${this.name} ${this.surname}`;
    }
}

var person2 = {
    name: "Alparslan",
    surname: "Yurtalan",
}

var saySomething = function (something) {
    console.log(this);
    console.log(`${something} ${this.getFullName()}`)
}

// Bind
var saySomethingToPerson = saySomething.bind(person);
saySomethingToPerson("Hello");

//Call
saySomething.call(person, "Merhaba");

//APPLY
saySomething.apply(person, ["Merhaba"]);

// call ve apply mantığı aynı tek fark parametreler [] parantezi içerisinde gönderiliyor

//SUBSTITUTING METHOD OF ANOTHER OBJECT
// Bir başka objenin fonksiyonunu bu objede call etmek
console.log(person.getFullName.apply(person2));
