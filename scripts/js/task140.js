// 1
let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];

    for (let j = 0; j < 5; j++) {
        arr[i].push(j + 1);
    }
}

console.log(arr);

// 2
let arr1 = [];
for (let i = 0; i < 3; i++) {
    arr1[i] = [];

    for (let j = 0; j < 4; j++) {
        arr1[i].push('x');
    }
}

console.log(arr1);

// 3
let arr2 = [];
for (let i = 0; i <= 2; i++) {
    arr2[i] = [];

    for (let k = 0; k < 1; k++) {
        arr2[i][k] = [];

        for (let j = 1; j <= 5; j++) {
            arr2[i][k].push(j);
        } 
    }
    
}
console.log(arr2);
