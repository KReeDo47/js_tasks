let obj = {x: 1, y: 2, z: 3};
console.log(obj.x);
// 2
let obj1 = {x: 1, y: 2, z: 3};
let key = 'x';
console.log(obj1[key]);
// 3
let obj2 = {x: 1, y: 2, z: 3};
let sum = obj2.x + obj2.y + obj2.x;
console.log(sum);
// 4
let obj3 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj3).length);

