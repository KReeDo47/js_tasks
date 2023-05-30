let number = 10;

const timer = setInterval(() => {
console.log(number);
if (number === 0) {
    clearInterval(timer);
} else {
    number--;
}
}, 1000);