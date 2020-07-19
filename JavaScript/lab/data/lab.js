var myObject = {
    id:1,
    type:0,
    price:65.7,
    profitFunc:function(){
        this.price=this.price * 1.15;
    }
};


function printIt(myObject){
   
    for (const [key, value] of Object.entries(myObject)) {    
        console.log(`${key}: ${value}`);
    }
    console.log(myObject.profitFunc);
}

printIt(myObject);