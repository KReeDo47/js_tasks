let month = 5;

if (month == 12 || month == 1 || month == 2) {
    console.log('Зима');
} else if (month == 3 || month == 4 || month == 5) {
    console.log('Весна')
} else if (month == 6 || month == 7 || month == 8) {
    console.log('Лето')
} else if (month == 9 || month == 10 || month == 11) {
    console.log('Осень')
 }

 // 2
let str = 'abcde';

if (str[0] == 'a') {
   console.log('da')
} else {
   console.log('net')
}

// 3
const num = 12345;

if (String(num)[0] == '1' || String(num)[0] == '2' || String(num)[0] == '3') {
   console.log('da')
} else {
   console.log('net')
}

// 4 
const num1 = '123';
let result = Number(num1[0]) + Number(num1[1]) + Number(num1[2]);

console.log(result)

// 5
let num15 = '123033';

let sum1 = Number(num15[0]) + Number(num15[1]) + Number(num15[2]);
let sum2 = Number(num15[3]) + Number(num15[4]) + Number(num15[5]);

if (sum1 == sum2) {
   console.log('суммы равны');
} else {
   console.log('суммы не равны');
} 