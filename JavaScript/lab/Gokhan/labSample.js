var myObject = {
    id: 1,
    type: 0,
    price: 65.7,
    profitFunc: function () {
        this.price = this.price * 1.15;
    }
};

// labFunction();
// function labFunction() {
//     Object.keys(myObject).forEach(function (item) {
//         console.log("type: " + typeof item + ", value" + myObject[item]);
//     });
// }

function* getObjectKeyValuePairs(obj){
    for (let [key, value] of Object.entries(obj)) {
        console.log(key, value);
    }
}

var iterator = getObjectKeyValuePairs(myObject);
console.log(iterator.next());
console.log(iterator.next());