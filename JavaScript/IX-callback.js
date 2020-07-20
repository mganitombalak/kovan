//CALLBACK

// function longRunning(f) {
//     setTimeout(() => f("Done!"), 5000);
// }

// var callBack = (item) => {
//     console.log("Job has been completed.")
//     console.log(`message:${item}`);
// };
// longRunning(callBack);
// console.log("Waiting");
// let prom = new Promise((resolve, reject) => {
//     setTimeout(() => reject({ status: false, msg: "Failed!" }), 5000);
// });

// prom
//     .then(result => console.log(result))
//     .catch(err => console.log(err));

// console.log("I'm doing my other awesome duties!");

let logoutProm = new Promise((resolve, reject) => {
    try {
        resolve("logout succesfull");
    }
    catch{
        reject();
    }
});

prom
    .then(result => {
        console.log("component1");
        console.log("component2");
        console.log("component3");
        console.log("component4");
        console.log("component5");
        console.log("component6");
    })
    .catch(err => errMessage(err));



