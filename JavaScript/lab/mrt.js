var person = {
    name: "Ganimmm",
    surname: "Tombalak",
    age: 18
}


function* keyvalpair(obj){
    for (key of Object.keys(obj)){
        yield {key:key, value:obj.key};
    }  
}

var p = keyvalpair(person);

for (var iterator of p) {
    console.log(iterator);
}