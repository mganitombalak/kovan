let test = function (obj, objType) {
    let itemType;

    if (typeof obj === "object") {
        for (const [itemKey, itemValue] of Object.entries(obj)) {
            itemType = typeof itemValue;

            if (itemType === "function"){
                console.log(`Type: ${itemType}, Key: ${itemKey}, Value: ${itemValue}`);
            }
        }
    }
};

test(myObject);
