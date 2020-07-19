let test = function (obj) {
    let itemType;

    if (typeof obj === "object") {
        for (const [itemKey, itemValue] of Object.entries(obj)) {
            itemType = typeof itemValue;
            console.log(`Type: ${itemType}, Key: ${itemKey}, Value: ${itemValue}`);
        }
    }
};

test(myObject);
