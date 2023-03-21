// 1

function func1(obj1) {
   obj1.a = '!';
}

let obj1 = { a: 1, b: 2, c: 3 };
func1(obj1);
console.log(obj1); // { a: !, b: 2, c: 3 }

// 2

function func2(arg2) {
   arg2 = '!';
}

let obj2 = { a: 1, b: 2, c: 3 };
func2(obj2.a);
console.log(obj2); // { a: 1, b: 2, c: 3 }

// 3

function func3(obj3) {
   obj3 = '!';
}

let obj3 = { a: 1, b: 2, c: 3 };
func3(obj3.a);
console.log(obj3); // { a: 1, b: 2, c: 3 }

// 4

function func4(arr4) {
   arr4.splice(1, 1);
}

let arr4 = [1, 2, 3];
func4(arr4);
console.log(arr4); // [1, 3]

// splice() изменяет исходный массив, тогда как slice()нет, но оба они возвращают объект массива.

// 5

function func(arr) {
   arr.slice(1, 1);
}

let arr = [1, 2, 3];
func(arr);
console.log(arr); // [1, 2, 3]

// // splice() изменяет исходный массив, тогда как slice()нет, но оба они возвращают объект массива.

// 6

function func6(arr6) {
   let newArr = arr6;
   newArr[0] = '!';
}

let arr6 = [1, 2, 3];
func6(arr6);
console.log(arr6); // ['!', 2, 3]