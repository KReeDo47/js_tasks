let arr1 = [1, 2, 3, 4, 5, 6];

for (let i = 1; i <= arr1.length; i++) {
    console.log([arr1[i]]);
};

// 2
let res = 0

for (let i = 1; i <= arr1.length; i++) {
    res = arr1[i] + arr1[i + 1];
    console.log(res);
};

// 3
for (let i = 1; i <= arr1.length; i++) {
    console.log(arr1[i - 2], arr1[i - 1]);
};

// 4
for (let i = 1; i <= arr1.length; i++) {
    console.log(arr1[i - 2] + arr1[i - 1]);
};

// 5
let res1 = 0;

for (let i = 1; i <= arr1.length; i++) {
    res = arr1[i - 1] + arr1[i] + arr1[i + 1];
    console.log(res1)
};
