var person = {
    name: "Ganimmm",
    surname: "Tombalak",
    age: 18
}


function* keyvalpair(obj){
    yield obj.name
    yield obj.surname
    yield obj.age
}

var p = keyvalpair(person);

for (var iterator of p) {
    console.log(iterator);
}