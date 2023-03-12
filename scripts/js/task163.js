// 1 
function func(num) {
    return num; // сработает эта строка, все что ниже, не сработает

    let res = num ** 2;
    return res;
 }

 console.log(func(3)); // 3

 // 2
 function func(num) {
	if (num <= 0) {
		return Math.abs(num);
	} else {
		return num ** 2;
	}
}

console.log( func(10) ); // 100
console.log( func(-5) ); // 5

// 3
function func(num) {
	if (num <= 0) {
		return Math.abs(num); // если это условие false, то сработает второй return
	}
	
	return num ** 2;
}

console.log( func(10) ); // 100
console.log( func(-5) ); // 5 