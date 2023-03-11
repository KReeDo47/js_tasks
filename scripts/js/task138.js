// 1
let arr = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
];

console.log(arr[3][2]);
console.log(arr[1][1]);
console.log(arr[2][0]);
console.log(arr[0][0]);

// 2
let arr1 = [
    [1, 2],
    [3, 4], 
    [5, 6],
];

console.log(arr1[0][0] + arr1[0][1] + arr1[1][0] + arr1[1][1] + arr1[2][0] + arr1[2][1]);

// 3
let arr2 = [
    [
       [1, 2],
       [3, 4],
    ],
    [
       [5, 6],
       [7, 8],
    ],
 ];

 let sum3 = 0

 for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2[i].length; j++) {
       for (let k = 0; k < arr2[i][j].length; k++) {
          sum3 += arr2[i][j][k];
       };
    };
 };

 console.log(sum3)

// 4
let arr3 = [
    [
        1, 2, 3, [4, 5, [6, 7]],
    ],
    [
        8, [9, 10],
    ],
];

let res0 = arr3[0][0] + arr3[0][1] + arr3[0][2] + arr3[0][3][0] + arr3[0][3][1] + arr3[0][3][2][0] + arr3[0][3][2][1]
   let res1 = arr3[1][0] + arr3[1][1][0] + arr3[1][1][1]

   let result = res0 + res1

   console.log(result)

