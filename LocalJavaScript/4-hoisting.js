//HOISTING
// Javascript engine web sekmesi açıldığında tüm js dosyalarını tarayarak global environment oluşturmaya çalışıyor.
// dolayısıyla fullName olmadan fullname çalıştırıp exception vermiyor
// ilk variable taranırken var lar taranıyor ancak let ve const taranmıyor
//dolayısısyla let ile tanımlandısa exception atıyor

// Global environment Window objesidir
console.log(this);
sayHello(fullName);

var fullName = "Gokhan Yurtalan";

function sayHello(name) {
    console.log(`Hello ${fullName}`);
}
