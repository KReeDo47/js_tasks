// 1
let arr = [1, 3, -5, 6, -7, -8, 11];

let result = arr.filter(elem => elem > 0);

console.log(result);


// 2
let arr2 = [1, 3, -5, 6, -7, -8, 11];

let result2 = arr2.filter(elem => elem < 0);

console.log(result2);


// 3
let arr3 = [1, 3, -5, 6, -7, -8, 11];

let result3 = arr3.filter(elem => elem > 0 && elem < 10);

console.log(result3);


// 4
const arr4 = ["hello", "world", "a", "b"];

let result4 = arr4.filter((elem) => elem.length >= 5);

console.log(result4);


// 5

const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let result5 = arr5.filter((elem, index) => elem * index <= 30);

console.log(result5);

// 6

const arr6 = [1, 2, [3, 4], 5, [6, 7]];
const newarr6 = [];

let result6 = arr6.filter(function (elem) {
if (typeof elem !== "object") {
    newarr6.push(elem);
}
});

console.log(newarr6);

// 7

const arr7 = [1, 2, -3, -4, -11, 20];
let count = 0;

let result7 = arr7.filter((elem) => {
    if (elem < 0) {
    count++;
    }
});

console.log(count);