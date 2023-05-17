let now = new Date();

// 1
let date1 = new Date(2000, 8, 31, 23, 59, 59);
let date2 = new Date(2010, 2, 14, 23, 59, 59);

let diff = date2 - date1;
console.log(diff);

// 2
console.log(diff / (1000 * 3600 * 24));

// 3
console.log(diff / (1000 * 60 * 60 * 24 * 31))

//4 
console.log(diff / (1000 * 60 * 60 * 24 * 31 * 12));