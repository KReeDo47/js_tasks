let number = 100;
let timerId = setInterval(() => {
console.log(number);
number--;

if (number === 0) {
    clearInterval(timerId);
}
}, 1000);