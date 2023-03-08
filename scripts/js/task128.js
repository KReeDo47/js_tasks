// Ex. 1
let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];

let obj1 = {};

for (let i = 0; i <= arr1.length - 1; i++) {
    obj1[arr1[i]] = arr2[i];
}
console.log(obj1);


// Ex. 2
let obj21 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let obj22 = {};

for (let i in obj21) {
    if (obj21[i] % 2 == 0) {
        obj22[i] = obj21[i];
    }
}
console.log(obj22);


// Ex. 3
let obj31 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let obj32 = {};

for (let i in obj31) {
    obj32[obj31[i]] = i;
}
console.log(obj32); 