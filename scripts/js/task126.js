let arr = [];

for (let i = 1; i <= 10; i++) {
    arr.push(i);
}

console.log(arr);


let arr1 = [];

for (let i = 1; i <= 10; i++) {
    arr1.push('x');
}

console.log(arr1);


let arr2 = [4, 8, -7, 1, 2, -5, 7];
let chis = [];

for (let key in arr2) {
    if (arr2[key] > 0) {
        chis.push(arr2[key]);
    } else {
        continue;
    }
}
console.log(arr2);
console.log(chis);
