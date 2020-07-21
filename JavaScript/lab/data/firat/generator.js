function* getObjectKeyValuePairs (obj){
    for (key of Object.keys(obj)){
        yield {key:key, value:obj.key};
    }  
}


function iterateOverArray(obj) {
    Object.keys(obj).forEach(key => {
        console.log(`${key} => Value: ${obj.key} Type: typeof Object.key`);
    });
}

function getFunctions(obj){
   return Object.keys(obj).filter(key => typeof obj.key === 'function').map(key => obj.key);
}