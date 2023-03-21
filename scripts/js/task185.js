// 1 
test(
    function() {return 1;},
    function() {return 2;},
    function() {return 3;},
);

function test(func1, func2, func3) {
    console.log(func1() + func2() + func3());
}

// 2
function test(func1, func2, func3) {
    return func1() + func2() + func3();
}

// 3
function get1() {
    return 1;
}
function get2() {
    return 2;
}
function get3() {
    return 3;
}

test(get1, get2, get3);

function test(func1, func2, func3) {
    console.log(func1() + func2() + func3());
}

// 4
let get4 = function() {
    return 1;
} 
let get5 = function() {
    return 2;
}
let get6 = function() {
    return 3;
}

test(get4, get5, get6);

function test(func1, func2, func3) {
    console.log(func1() + func2() + func3());
}

// 5
test(function(num) {
    return num * num * num;
}); 

function test(func) {
    console.log(func(3));
}

// 6
function get7(num) {
    return num * num * num;
}

test(get7);

function test(func7) {
    console.log(func7(3));
}

// 7
let get8 = function(num) {
    return num * num * num;
}

test(get8);

function test(func8) {
    console.log(func8(5));
}

// 8
function sum(num1, num2){
    return num1 + num2;
}

function test(func9) {
    alert(func9(2, 3));
}

test(sum);

// 9
function square(num) {
    return num * num;
}

function cube(num) {
    return num * num * num;
}


function test(num, func10, func20) {
    return func10(num) + func20(num);
}

console.log(test(3, square, cube));

// 10
function test(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }
    return arr;
}

let result = test([1, 2, 3], function(num) {
    return num * num;
});

console.log(result);

 
// 11
function test(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }
    return arr;
}

let result2 = test([1, 2, 3], function(num) {
    return num * num * num;
});

console.log(result2);









