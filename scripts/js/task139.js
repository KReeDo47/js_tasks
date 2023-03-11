// 1
let arr = [
    [1, 2, 3],
    [4, 5],
    [6],
];
let sum = 0

for (let mainArr of arr) {
    for (let SubMainArr of mainArr) {
        sum += SubMainArr;
    };
};        

console.log(sum);

// 2
let arr1 = [
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]]
];
let sum1 = 0;

for (let mainArr of arr1) {
    for (let SubMainArr of mainArr) {
       for (let SubSubMainArr of SubMainArr) {
          sum1 += SubSubMainArr
       };
    };
 };

 console.log(sum1)

// 3 
let arr2 = [
    [1, 2, 3],
    [4, 5],
    [6],
];
let sum2 = 0

for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2[i].length; j++) {
        sum2 += arr2[i][j];
    };
};        

console.log(sum2);


let arr3 = [
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]]
];
let sum3 = 0

for (let i = 0; i < arr3.length; i++) {
    for (let j = 0; j < arr3[i].length; j++) {
        for (let k = 0; k < arr3[i][j].length; k++)
        sum3 += arr3[i][j][k];
    };
};        

console.log(sum3);