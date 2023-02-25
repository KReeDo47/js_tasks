// 1
let num1 = 1;
let num2 = 2;

if (num1 + num2 === 3) {
   console.log('+++');
} else {
   console.log('---');
}

// 2
let num3 = '1';
let num4 = '2';

if (Number(num3) + Number(num4) === 3) {
   console.log('+++');
} else {
   console.log('---');
}
// 3
let num5 = '1';
let num6 = '2';

if (Number(num5) + Number(num6) === 3) {
   console.log('+++');
} else {
   console.log('---');
}

// 4
let num = 123;
let str = String(num)

if (str[0] == '1') {
   console.log('+++');
} else {
   console.log('---');
}

// 5
let num7 = 123;

if (String(num7)[0] === '1') {
   console.log('+++');
} else {
   console.log('---');
}

// 6
let num8 = 123;

if (String(num8)[0] === '1') {
   console.log('+++');
} else {
   console.log('---');
}

// 7
let num9 = 123;
let first = String(num9);

if (first[0] === '1') {
   console.log('+++');
} else {
   console.log('---');
}

// 8
let num10 = 12;

if (String(num10).length === 2) {
   console.log('+++');
} else {
   console.log('---');
}

// 9
let num11 = 12;
let str11 = String(num11);

if (str11.length === 2) {
   console.log('+++');
} else {
   console.log('---');
}

// 10
let num12 = 12;

if (String(num12).length === 2) {
   console.log('+++');
} else {
   console.log('---');
}

// 11
let num13 = 12;

if (String(num13).length === 2) {
   console.log('+++');
} else {
   console.log('---');
}

// 12
let num14 = 12;

if (String(num14).length === 2) {
   console.log('+++');
} else {
   console.log('---');
}

// 13
let num15 = '123033';

let sum1 = Number(num15[0]) + Number(num15[1]) + Number(num15[2]);
let sum2 = Number(num15[3]) + Number(num15[4]) + Number(num15[5]);

if (sum1 == sum2) {
   console.log('суммы равны');
} else {
   console.log('суммы не равны');
}
