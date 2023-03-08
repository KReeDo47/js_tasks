let arr = [1, 2, 3, 4, 0, 5];
for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == 0) {
        break;
    } else {
        console.log(arr[i]);
    };
};


let arr2 = [1, 2, 3, 4, -5, 5];
let res2 = 0;
for (let i = 0; i <= arr2.length - 1; i++) {
    if (arr2[i] < 0) {
        break;
    } else {
        res2 += arr2[i];
    };
};
console.log(res2)


let arr3 = [1, 2, 4, 5, 3, 5, 1];
for (let i = 0; i <= arr3.length - 1; i++) {
    if (arr3[i] == 3) {
        console.log(i)
        break;
    } else {
        continue;
    };
};


let log = 1, i = 1;
for (i; ; i++) {
    if (log + i > 100) {
        break;
    } else {
        log += i;
    };
};
console.log(log);
console.log(i);
