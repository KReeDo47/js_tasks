// 1
function sqrt(num) {
    return Math.sqrt(num);
}

function round(num) {
    return num.toFixed(3);
}

let res1 = round(sqrt(2));
console.log(res1);

// 2
function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}

let res2 = sum(sqrt(2), sqrt(3), sqrt(4));
console.log(res2);

// 3
function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}

function round(num) {
    return num.toFixed(3);
}

let res3 = round(sum(sqrt(2), sqrt(3), sqrt(4)));
console.log(res3);
