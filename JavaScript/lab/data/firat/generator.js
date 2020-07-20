function* getObjectKeyValuePairs (obj){
    for (key of Object.keys(obj)){
        yield {key:key, value:obj.key};
    }  
}