// 1 
let str1 = 'Hello world';
let res1 = str1.slice(0) + str1.slice(-1).toUpperCase();

console.log(res1)

// 2
let str2 = 'Hello world';
let res2 = str2.slice(0, 2).toUpperCase() + str2.slice(2);

console.log(res2)

// 3
let str3 = 'London';
let res3 = str2.slice(0, 1).toLowerCase() + str2.slice(1);

console.log(res3)

// 4
let str = 'word1 word2 word3';

let words = str.split(' ');

for (let i = 0; i < words.length; i++) {
    words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
}

let result = words.join(' ');
console.log(result);

// 5
let str5 = 'var_test_text';

console.log(str5)

let word1 = str5.split('_');

for (let i = 0; i <= word1.length - 1; i++) {
   word1[i] = word1[i].slice(0, 1).toUpperCase() + word1[i].slice(1);
};

str5 = word1.join('');

console.log(str5)

// 6
let newStr = str5.slice(0, 1).toLowerCase() + str5.slice(1);

console.log(newStr)

// 7
let st = 'Ben Franklin';
let res = st.split('').reverse().join('');
console.log(res); 





