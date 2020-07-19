var myObject = {
    id: 1,
    type: 0,
    price: 65.7,
    profitFunc: function () {
        this.price = this.price * 1.15;
    }
};

labFunction();
function labFunction() {
    Object.keys(myObject).forEach(function (item) {
        console.log("type: " + typeof item + ", value" + myObject[item]);
    });
}