func(1, 2, 3, 4, 5);

function func(a, b, ...rest) {
    console.log(a);             // выведет 1
    console.log(b);             // выведет 2
    console.log(rest);          // выведет [3, 4, 5]
}