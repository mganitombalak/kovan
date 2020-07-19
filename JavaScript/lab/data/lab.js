var myObject = {
    id:1,
    type:0,
    price:65.7,
    profitFunc:function(){
        this.price=this.price * 1.15;
    }
};

function iterateOverArray(obj) {
    Object.keys(obj).forEach(key => {
        console.log(`${key} => Value: ${obj.key} Type: typeof Object.key`);
    });
}

function getFunctions(obj){
   return Object.keys(obj).filter(key => typeof obj.key === 'function').map(key => obj.key);
}