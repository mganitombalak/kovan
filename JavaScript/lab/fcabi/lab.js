var myObject = {
    id:1,
    type:0,
    price:65.7,
    profitFunc:function(){
        this.price=this.price * 1.15;
    }
};

function printObject(object){
    let entries = Object.entries(object);

    entries.forEach(element => {
        console.log(element[0] + " " + element[1] + " " + typeof(element[1]));
    });
}

printObject(myObject);