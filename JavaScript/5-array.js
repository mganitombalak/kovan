
var arr = [
    1,
    2.6,
    false,
    {
        name: "Gokhan",
        age: 18
    },
    item => console.log(`value=>${item}`),
    "Hello!"
];
console.log(arr);
console.log(arr[3]);
console.log(arr[4]);
arr[4]("Cikti")
console.log(Array.isArray(arr));