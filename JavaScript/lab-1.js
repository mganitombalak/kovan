
var myObject1 = {
    id:1,
    type:0,
    price:65.7,
    profitFunc:function(){
        this.price=this.price * 1.15;
    }
};

function listOfProperty(myObject) {
    for (var item in myObject) {
        console.log(item + "=> value: " + myObject[item]+ " Type: " + typeof myObject[item])
    }
}


function listOfFunctionProperty(myObject) {
    for (var item in myObject) {
        if (typeof myObject[item] == "function"){
            console.log(item + "=> value: " + myObject[item]+ " Type: " + typeof myObject[item])
        }
    }
}
listOfProperty(myObject1);
listOfFunctionProperty(myObject1)