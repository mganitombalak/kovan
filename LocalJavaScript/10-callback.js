//CALLBACK

// function longRunning(f) {
//     setTimeout(() => f("Done!"), 5000);
// }

// var callBack = (item) => {
//     console.log("Job has been complated.");
//     console.log(`message:${item}`);
// };

// longRunning(callBack);
// console.log("waiting");

//PROMISE

let prom = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Successfully Done"), 5000)
});

prom
    .then(result => console.log(result))
    .catch(err => console.log(err));


// Log-out olduğunda Promice ile TEK TEK dashboard içindeki
//compomentlere log-out olunda grafikleri sil demen gerek
// Rxjs ile Log-out olunduğunda tüm componentler Log-out'u dinleyerek asencron grafikeri silebilir
