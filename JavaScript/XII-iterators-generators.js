// Array
// Maps
// String
// Sets

var person = {
    name: "Gani",
    surname: "Tombalak",
    age: 18
}
// FOR-OF
//var metin= "Mehmet Gani Tombalak";
// for (let s of metin){
//     console.log(s);
// }
// person[Symbol.iterator] = function* () {
//     yield this.name;
//     yield this.surname;
//     yield this.age
// }
// // console.log([...person]);
// // for (let field of person) {
// //     console.log(field);
// // }

// function* topla(sayi) {
//     yield sayi + 1;
//     yield sayi + 2;
//     yield sayi + 3;
//     yield sayi + 4;
//     yield sayi + 5;

// }

// var iterator = topla(1);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

function* getObjectKeyValuePairs(obj) {
    const reflectedProps = Reflect.ownKeys(obj);
    for (const prop of reflectedProps) {
        yield [prop, obj[prop]];
    }
}

for (let [key, value] of getObjectKeyValuePairs(person)) {
    console.log(`${key} = ${value}`);
}