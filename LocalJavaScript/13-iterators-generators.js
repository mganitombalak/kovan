// Array
//Maps
//String
//Sets  bunlar iterator objelerdir

var person = {
    name: "Gokhan",
    surnam: "Yurtalan",
    age: 18
}

// for (let field of person) {
//     console.log(field);
// }

function* topla(sayi) {
    yield sayi + 1;
    yield sayi + 2;
    yield sayi + 3;
    yield sayi + 4;
    yield sayi + 5;
}

var iterator = topla(1);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());