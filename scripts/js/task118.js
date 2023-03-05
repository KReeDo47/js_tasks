let arr = [2, 5, 9, 3, 1, 4];
let res = 0;

for (let elem of arr) {
    res += elem;
}

console.log(res);
// 2
let arr1 = [2, 5, 9, 3, 1, 4];
let res1 = 0;

for (let elem of arr1) {
    if (elem % 2 === 0) {
        res1 += elem; 
    }
}

console.log(res1)
// 3
let arr2 = [2, 5, 9, 3, 1, 4];
let res2 = 0;

for (let elem of arr2) {
    res2 += elem ** 2;
}

console.log(res2);
// 4
let arr3 = [2, 5, 9, 3, 1, 4];
let res3 = 1;

for (let elem of arr3) {
    res3 *= elem;
}

console.log(res3);
